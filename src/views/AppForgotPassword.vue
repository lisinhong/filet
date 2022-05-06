<template>
  <div class="app-forgot-password">
    <div class="account-container">
      <div class="account-header">
        <div class="company">
          <i><icon-polygon /></i>
          <span>Filet</span>
        </div>
        <router-link to="/">Home</router-link>
      </div>
      <div class="account-card">
        <div class="account-greeting">Forgot Password?</div>
        <b-form-group label-for="email" label="Email">
          <b-form-input
            id="email"
            type="email"
            v-model="email"
            placeholder="Type your email"
          ></b-form-input>
        </b-form-group>
        <button type="button" :disabled="isSendDisabled" @click="handleSend">
          Send Recovery Link
        </button>
        <div class="note">
          <router-link to="login">Return to Login</router-link>
        </div>
      </div>
      <div class="account-footer">
        <router-link to="contact">Contact Support</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import IconPolygon from "@/components/icons/IconPolygon.vue";

export default {
  name: "AppForgotPassword",
  components: {
    IconPolygon,
  },
  data() {
    return {
      email: null,
      isLoading: false,
    };
  },
  computed: {
    isSendDisabled() {
      return !this.email || this.isLoading;
    },
  },
  methods: {
    ...mapActions(["sendRecoverLink"]),
    ...mapMutations(["showAlert", "hideAlert"]),
    async handleSend() {
      this.isLoading = true;

      try {
        await this.sendRecoverLink({
          email: this.email,
        });

        this.showAlert({
          variant: "success",
          text: "Email has been sent.",
        });
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
.app-forgot-password {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-top: auto;
    margin-bottom: 0;
  }

  .note {
    margin-top: 32px;
    font-weight: 700;
    color: $primary-dark-1;
    text-align: center;

    a {
      margin: 0;
    }
  }
}
</style>
