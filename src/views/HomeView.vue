<template>
  <section id="content">
    <div class="main">
      <section id="home">
        <div class="left">
          <h1>
            <img
              src="../assets/images/DataHaus-Icon.png"
              class="intro-logo"
            />Data<span class="cyan">Haus</span>
          </h1>
          <p>
            DataHaus is a decentralised data economy, built on Filecoin, which
            provides a reliable web3 data foundation to efficiently handle all
            data types and uses cases needed today.
          </p>
          <p>
            Filecoin is a powerful and dynamic distributed cloud storage network
            for your data. Create and tune strategies to suit your big and small
            data needs in redundancy, retrieval speed, data processing and cost.
          </p>
          <p>
            <a href="/#about" title="Learn More" class="link-button"
              >Solutions</a
            >
            <a href="/#providers" title="Learn More" class="link-button"
              >Options</a
            >
            <a href="/#cod" title="Learn More" class="link-button">COD</a>
          </p>
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
import { onMounted } from "vue";

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
      color: $white;
      background: $haus-blue;
      border-bottom: 1px solid $haus-blue;
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 0 20px;
      overflow: hidden;

      @include breakpoint($break-ssm) {
        flex-direction: column;
        justify-content: center;
        padding: 20px;
      }

      .left {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: center;
        padding: 40px 40px 0 40px;

        @include breakpoint($break-ssm) {
          width: 100%;
        }

        h1 {
          font-size: 42px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-content: flex-start;
          align-items: flex-end;
          margin-left: 10px;

          @include breakpoint($break-ssm) {
            font-size: 38px;
          }

          img {
            width: 70px;
            margin-bottom: -10px;
            margin-right: 5px;
            @include breakpoint($break-ssm) {
              width: 60px;
            }
          }
        }
        p {
          padding: 0 0 0 20px;
          @include breakpoint($break-ssm) {
            padding: 0 0 0 10px;
          }
        }

        .link-button {
          margin-right: 10px;
        }
      }

      .right {
        width: 60%;
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
        color: $white;
        font-size: 42px;
        margin-bottom: 20px;
        span {
          color: $haus-cyan;
        }
      }

      p {
        color: $white;
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

      color: $white;
      background: haus-blue;

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
            color: $white;
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
              border-bottom: 0.5px solid $haus-cyan;
            }

            &:focus {
              border-bottom: 0.5px solid $haus-cyan;
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

@media (min-width: 1024px) {
  .home {
    min-height: $page-height;
    display: flex;
    align-items: center;
  }
}
</style>
