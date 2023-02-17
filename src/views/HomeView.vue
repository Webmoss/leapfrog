<template>
  <section id="content">
    <div class="main">
      <section id="home">
        <div class="left">
          <h1>
            <img src="../assets/images/frog.png" class="intro-logo" />Leapfrog
          </h1>
          <p>
            Leapfrog allows you to create and fine-tune models, upload samples
            to the specific model and train your very own custom AI model using
            Leap.
          </p>
          <p>
            Too fancy, we got you, enter a prompt and select some options, leap
            in....
          </p>
          <p>
            <a href="/" title="Learn More" class="link-button">Create</a>
            <a href="/#providers" title="Learn More" class="link-button"
              >Modals</a
            >
            <a href="/#cod" title="Learn More" class="link-button">Prompt</a>
          </p>
          <div class="search-bar">
            <input
              v-model="searchValue"
              type="text"
              class="search-input"
              placeholder="Search Images"
            />
            <button class="search-button" @click="searchFn()">
              <!-- <i-mdi-magnify class="icon-color" /> -->
              Search
            </button>
          </div>
        </div>
        <div class="right">
          <div class="home-graphic">
            <!-- <img src="../assets/images/BG2.png" /> -->
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="footer-menu">
          <nav class="footer-navbar">
            <a
              href="https://github.com/Webmoss/leapfrog"
              alt="GitHub"
              target="_blank"
              rel="noopener"
              >github</a
            >
            <a
              href="https://twitter.com/webmoss"
              alt="Twitter"
              target="_blank"
              rel="noopener"
              >twitter</a
            >
          </nav>
        </div>
      </section>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

/* Import our Services and APIs */
// import leapAPI from "../services/leapAPI";

const searchValue = ref<string>("");
const searchResults = ref<string[] | void>([]);

async function searchFn() {
  // const leapfrog = new leapAPI();

  // searchResults.value = await leapfrog.listInferenceJobs();
  console.log("searchValue", searchValue.value);
  console.log("searchResults", searchResults.value);
}

async function loadImages() {
  // try {
  //   const { ethereum } = window;
  //   if (!ethereum) {
  //     notyf.error(`⛽ Please connect MetaMask to continue!`);
  //     return;
  //   }
  //   const accounts = await ethereum.request({ method: "eth_accounts" });
  //   if (accounts.length !== 0) store.setAccount(accounts[0]);
  // } catch (error) {
  //   console.log(error);
  // }
}

onMounted(async () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  await loadImages();
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@import "../assets/styles/mixins.scss";

section#content {
  position: relative;
  height: 100%;

  .main {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;

    section#home {
      color: $leapfrog-blue;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;

      @include breakpoint($break-ssm) {
        flex-direction: column;
        justify-content: center;
      }

      .left {
        width: 28%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
        padding: 0 1%;

        @include breakpoint($break-ssm) {
          width: 98%;
          padding: 1%;
        }

        h1 {
          font-size: 38px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-content: flex-start;
          align-items: flex-end;
          margin: 0;

          @include breakpoint($break-ssm) {
            font-size: 32px;
          }

          img {
            width: 50px;
            margin: -5px 5px 5px 0;
            @include breakpoint($break-ssm) {
              width: 45px;
            }
          }
        }
        p {
          padding: 0;
          @include breakpoint($break-ssm) {
            padding: 0 0 0 10px;
          }
        }

        .search-bar {
          width: 100%;
          position: relative;

          input.search-input {
            width: 98%;
            height: 33px;
            color: $leapfrog-blue;
            background-color: #ffffff;
            border: 1px solid $leapfrog-blue;
            border-radius: 20px;
            letter-spacing: 1px;
            font-size: 0.9rem;
            padding: 0px 0px 0px 1%;
            margin: 0 10px 0 0;
            text-align: left;
            @include breakpoint($break-md) {
              min-width: 200px;
            }
            @include breakpoint($break-sm) {
              width: 80%;
              margin: 0 1% 1% 1%;
            }
            @include breakpoint($break-xs) {
              width: 80%;
              margin: 0 1% 1% 1%;
            }
          }
          input.search-input::placeholder {
            color: $leapfrog-blue;
            letter-spacing: 1px;
            padding-left: 10px;
          }
          input.search-input:focus {
            border: 1px solid $leapfrog-blue;
            outline: none;
          }
          .search-button {
            position: absolute;
            top: 0;
            right: 0;
            color: $white;
            background-color: $leapfrog-blue;
            font-size: 0.9rem;
            width: auto;
            height: 35px;
            border-radius: 20px;
            border: 1px solid $leapfrog-blue;
            padding-left: 20px;
            padding-right: 20px;
            transition: 0.6s;
            cursor: pointer;

            &:hover {
              color: $leapfrog-blue;
              text-decoration: none;
              background-color: $leapfrog-green;
              border: 1px solid $leapfrog-blue;
            }
          }
        }

        .link-button {
          height: 35px;
          font-size: 0.9rem;
          color: $white;
          background-color: $leapfrog-blue;
          margin-right: 14px;
          text-decoration: none;
          border: 1px solid $leapfrog-blue;
          border-radius: 20px;
          padding: 10px 24px 8px;
          transition: 0.6s;
          cursor: pointer;

          @include breakpoint($break-ssm) {
            font-size: 0.7rem;
          }

          &:hover {
            border: 1px solid $leapfrog-blue;
          }

          &:focus {
            border: 1px solid $leapfrog-blue;
          }
        }
      }

      .right {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: flex-start;
        padding: 0;

        @include breakpoint($break-ssm) {
          width: 100%;
          align-content: center;
          justify-content: center;
        }
      }

      h1 {
        font-size: 42px;
        margin-bottom: 20px;
        span {
          color: $leapfrog-blue;
        }
      }

      p {
        color: $leapfrog-blue;
        line-height: 1.7;
        margin-bottom: 20px;
      }

      .home-graphic {
        width: 100%;
        padding: 0;

        img,
        svg {
          width: 1350px;
          object-fit: cover;
          overflow: hidden;
          @include breakpoint($break-ssm) {
            width: 100%;
          }
        }
      }
    }

    #footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em 44px;

      @include breakpoint($break-ssm) {
        padding: 10px 0;
      }

      color: $leapfrog-blue;
      background: leapfrog-blue;

      .footer-menu {
        display: flex;
        align-items: center;

        .footer-navbar {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 0;
          padding: 0.3em;
          font-size: 0.9rem;

          @include breakpoint($break-ssm) {
            padding: 0;
            font-size: 0.8rem;
            justify-content: center;
          }

          a {
            font-size: 0.9rem;
            color: $leapfrog-blue;
            margin-right: 14px;
            padding-bottom: 1px;
            text-decoration: none;
            border-bottom: 0.5px solid;
            transition: 0.6s;
            cursor: pointer;

            @include breakpoint($break-ssm) {
              font-size: 0.7rem;
            }

            &:hover {
              font-weight: bold;
              border-bottom: 0.5px solid $leapfrog-green;
            }

            &:focus {
              border-bottom: 0.5px solid $leapfrog-green;
            }
          }

          svg {
            cursor: pointer;
            font-size: 2em;
          }
        }
      }
    }

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: inline;
    }
  }
}
</style>
