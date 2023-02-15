import axios from "axios";
import { Leap } from "@leap-ai/sdk";

const leap = new Leap(import.meta.env.VITE_LEAP_API_KEY);

// Prompt Example
//

export default class leapAPI {
  constructor() {
    // Pre-trained Models
    // We support the following pre-trained models for generating images;
    // Model Name	Model Id
    // Stable Diffusion 1.5	8b1b897c-d66d-45a6-b8d7-8e32421d02cf
    // Future Diffusion	1285ded4-b11b-4993-a491-d87cdfe6310c
    this.stableDiffusion = "8b1b897c-d66d-45a6-b8d7-8e32421d02cf";
    this.futureDiffusion = "1285ded4-b11b-4993-a491-d87cdfe6310c";
    // this.endpoint = new URL("https://api.zondax.ch/fil/data/v1/hyperspace");
  }

  /**
   * 1. Create Modal
   * The first step is to create a fine-tune model. This will create a container that will house your training samples.
   * You will need to specify a title, a keyword (which you will use when generating images, for example "a photo of @me"), and a random subject identifier string.
   *
   * @param {String} title // eg. "Futuristic Style"
   * @param {String} subjectKeyword // eg. "@me, @future"
   * @returns {Promise<String|Error>}
   */
  async createModal(title: string, subjectKeyword: string) {
    console.log("Create Modal Title : ", title);
    console.log("Create Modal Subject Keyword : ", subjectKeyword);

    const { data: model, error } = await leap.fineTune.createModel({
      title: title,
      subjectKeyword: subjectKeyword,
    });

    const modelId = model.id;

    console.log("createModal model", model);
    console.log("createModal data", data);
    console.log("createModal error", error);

    return modelId;
  }

  /**
   * 2. Upload Image Samples
   * Now that you have the modelId, you can use that to upload samples to the specific model.
   * Samples must be base64 encoded files.
   * You can upload as many samples as you want.
   * 
   * @param {String} modelId // eg.
   * @param {Array} images // eg. [
        "https://mywebsite.com/1.png",
        "https://mywebsite.com/2.png",
      ]
   * @returns {Promise<String|Error>}
   */
  async uploadImageSamples(modelId: string, images: Array<string>) {
    console.log("Upload Samples Modal Id : ", modelId);
    console.log("Upload Samples Images : ", images);

    const { data, error } = await leap.fineTune.uploadImageSamples({
      modelId: modelId,
      images: images,
    });

    console.log("uploadImageSamples data", data);
    console.log("uploadImageSamples error", error);
  }

  /**
   * 3. Queue Training Job
   * After uploading samples, you're now ready to initiate a training job.
   * Calling the /images/models/${modelId}/queue endpoint will initiate a training job and return an ID. This id is both the version and the training job.
   *
   * @param {String} modelId // eg.
   * @returns {Promise<String|Error>}
   */
  async queueTrainingJob(modelId: string) {
    console.log("Queue Training Job Modal Id : ", modelId);

    const { data: newVersion, error } = await leap.fineTune.queueTrainingJob({
      modelId: modelId,
    });

    console.log("queueTrainingJob newVersion", newVersion);
    console.log("queueTrainingJob data", data);
    console.log("queueTrainingJob error", error);

    const newVersionId = newVersion.id;

    return newVersionId;
  }

  /**
   * 4. Check Status of Training Job
   * A training job will take several minutes to complete, so you will need to check its status to make sure it's completed before you can generate images.
   *
   * @param {String} modelId // eg.
   * @param {String} newVersionId // eg.
   * @returns {Promise<String|Error>}
   */
  async getModelVersion(modelId: string, newVersionId: string) {
    console.log("getModelVersion Modal Id : ", modelId);
    console.log("getModelVersion newVersionId Id : ", newVersionId);

    const { data: checkVersion, error } = await leap.fineTune.getModelVersion({
      modelId: modelId,
      versionId: newVersionId,
    });

    console.log("getModelVersion checkVersion", checkVersion);
    console.log("getModelVersion data", data);
    console.log("getModelVersion error", error);

    const status = checkVersion.status;
    console.log("getModelVersion status", status);

    if (status === "completed") {
      return status;
    }
    return false;
  }

  /**
   * 5. Get Images / Predictions
   * Once your version has completed training you're ready to generate images.
   * Simply call the generate images endpoint as you normally would.
   * A version is optional, and if not provided, your generation request will default to the latest version.
   *
   * @param {String} modelId // eg.
   * @param {String} prompt // eg. "A photo of an astronaut riding a horse"
   * @returns {Promise<String|Error>}
   */
  async generateModalImage(modelId: string, prompt: string) {
    console.log("generateModalImage Modal Id : ", modelId);
    console.log("generateModalImage prompt : ", prompt);

    /**
     * If the model is trained, you can now get predictions from it.
     */
    const { data, error } = await leap.generate.generateImage({
      prompt: prompt,
      modelId: modelId,
    });

    // This will return an inference job id, which you can use to check the status of the job.
    // Once the job is completed, you can get the images from the job via the images/models/{modelId}/inferences/{inferenceId} endpoint.

    console.log("generateModalImage data", data);
    console.log("generateModalImage error", error);
  }

  /**
   * 6. List Inference Jobs
   *
   * @returns {Promise<String|Error>}
   */
  async listInferenceJobs() {
    console.log("List Inference Jobs");

    const { data, error } = await leap.generate.listInferenceJobs();

    console.log("listInferenceJobs data", data);
    console.log("listInferenceJobs error", error);
  }

  /**
   * 7. Get Inference Job
   * Once the job is completed, you can get the images from the job via the images/models/{modelId}/inferences/{inferenceId} endpoint.
   *
   * @param {String} inferenceId // eg. "44fe7036-207d-46b5-9030-adb57d1b3da6"
   * @returns {Promise<String|Error>}
   */
  async getInferenceJobs(inferenceId: string) {
    console.log("getInferenceJobs Inference Id : ", inferenceId);

    const { data, error } = await leap.generate.getInferenceJob({
      inferenceId: inferenceId,
    });

    console.log("getInferenceJobs data", data);
    console.log("getInferenceJobs error", error);
  }

  /**
   * 8. Delete Inference Job
   *
   * @param {String} inferenceId // eg. "44fe7036-207d-46b5-9030-adb57d1b3da6"
   * @returns {Promise<String|Error>}
   */
  async deleteInferenceJobs(inferenceId: string) {
    console.log("deleteInferenceJobs Inference Id : ", inferenceId);

    const { data, error } = await leap.generate.deleteInference({
      inferenceId: inferenceId,
    });

    console.log("deleteInferenceJobs data", data);
    console.log("deleteInferenceJobs error", error);
  }

  /**
   * Generate Image
   * @param {String} prompt // "A cat"
   * @returns {Promise<Object|Error>}
   */
  async generateImage(prompt: string) {
    const result = await leap.generate.generateImage({
      prompt: prompt,
    });

    if (result) {
      // Print the first image's uri
      console.log(result.images[0].uri);
    }

    console.log("Generate Image result", result);
  }

  /**
   * Edit Image
   * @param {File}
   * @param {String} prompt // eg. "Give him sunglasses"
   * @returns {Promise<Object|Error>}
   */
  async editImage(file: File, prompt: string) {
    const { data, error } = await leap.edit.editImage({
      file: file,
      prompt: prompt,
    });

    console.log("editImage data", data);
    console.log("editImage error", error);
  }

  /**
   * Retrieve Image
   * @param {String} id // eg. "44fe7036-207d-46b5-9030-adb57d1b3da6"
   * @returns {Promise<String|Error>}
   */
  async getEditJob(id: string) {
    console.log("Edit Id : ", id);
    const { data, error } = await leap.edit.getEditJob({
      editId: id,
    });

    console.log("getEditJob data", data);
    console.log("getEditJob error", error);
  }
}
