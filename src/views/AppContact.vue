<template>
  <div class="app-contact">
    <div class="contact-form">
      <div class="contact-title">CONTACT US</div>
      <div class="contact-description">
        We love to hear from you! Just send your questions our way and we will
        get back to you as soon as we can!
      </div>
      <b-form-group label-for="name" label="Name">
        <b-form-input
          id="name"
          type="text"
          v-model="name"
          placeholder="Your name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label-for="email" label="Email">
        <b-form-input
          id="email"
          type="email"
          v-model="email"
          placeholder="Your email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label-for="message" label="Message">
        <b-form-textarea
          id="message"
          v-model="message"
          placeholder="Your message goes here"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <button
        type="button"
        @click="handleContactClick"
        :disabled="isContactDisabled"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "AppContact",
  data() {
    return {
      isLoading: false,
      name: null,
      email: null,
      message: null,
    };
  },
  computed: {
    ...mapState(["userInfo", "token"]),
    isContactDisabled() {
      return !this.name || !this.email || !this.message || this.isLoading;
    },
  },
  async created() {
    if (!this.token) {
      return;
    }

    const userInfoResponse = await this.getUserInfo({
      token: this.token,
    });

    this.setUserInfo(userInfoResponse.data);
    this.name = this.userInfo.firstName;
    this.email = this.userInfo.email;
  },
  methods: {
    ...mapActions(["contact", "getUserInfo"]),
    ...mapMutations(["showAlert", "hideAlert", "setUserInfo"]),
    async handleContactClick() {
      this.isLoading = true;

      try {
        await this.contact({
          name: this.name,
          email: this.email,
          message: this.message,
        });

        this.showAlert({
          variant: "success",
          text: "Send successfully.",
        });
        this.name = null;
        this.email = null;
        this.message = null;
      } catch (error) {
        this.showAlert({
          text: error?.response?.data?.message,
        });
      } finally {
        this.isLoading = false;
        setTimeout(() => {
          this.hideAlert();
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .contact-header {
    margin-bottom: 64px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .text {
    flex: 0 1 35%;
    padding: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #760013;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: $white;
  }

  .image {
    flex: 1 1 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .contact-form {
    flex: 0 0 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    border: 1px solid $gray-5;
    border-radius: 4px;
    background: $white;
  }

  .contact-information {
    flex: 0 0 calc(50% - 56px);
    margin-right: 56px;
    padding: 32px 48px;
    display: flex;
    flex-direction: column;

    .contact-title {
      & + .contact-title {
        margin-top: 100px;
      }
    }

    .contact-description {
      margin-bottom: 56px;
    }
  }

  .contact-title {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: $gray-2;
  }

  .contact-description {
    margin-bottom: 66px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: $gray-2;
  }

  .form-group {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: $brand-dark;

    input,
    textarea {
      margin-top: 8px;
      border: 1px solid $gray-5;
      border-radius: 4px;

      &::placeholder {
        color: $gray-5;
      }
    }
  }

  button {
    margin-left: auto;
    width: 87px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #760013;
    border-radius: 22px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: $white;
    border: none;
  }

  @media screen and (max-width: 480px) {
    .contact-form {
      flex: 1 1 100%;
    }
  }
}
</style>
