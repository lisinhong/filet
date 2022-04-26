<template>
  <div class="app-register">
    <div class="account-container">
      <div class="account-header">
        <div class="company">
          <i><icon-polygon /></i>
          <span>Filet</span>
        </div>
        <router-link to="/">Home</router-link>
      </div>
      <div class="account-card">
        <div class="account-greeting">Create Account</div>
        <b-form-group label-for="email" label="Email">
          <b-form-input
            id="email"
            type="email"
            v-model="email"
            placeholder="example@example.com"
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
          v-model="agree"
          name="checkbox-1"
          :value="true"
          :unchecked-value="false"
        >
          I agree to the <a href="#">Terms of Services.</a>
        </b-form-checkbox>
        <button
          type="button"
          :disabled="isRegisterDisabled"
          @click="handleRegister"
        >
          Verify your email
        </button>
        <div class="note">
          <span>Already have an account?</span>
          <router-link to="login">Login</router-link>
        </div>
      </div>
      <div class="account-footer">
        <a href="#">Privacy Policy</a>
        <a href="#">User Notice</a>
      </div>
    </div>
    <b-alert fade :show="showRegisterAlert">
      Invalid email. Please type it again!
    </b-alert>
  </div>
</template>

<script>
import IconPolygon from "@/components/icons/IconPolygon.vue";

export default {
  name: "AppRegister",
  components: {
    IconPolygon,
  },
  data() {
    return {
      email: null,
      agree: false,
      showRegisterAlert: false,
    };
  },
  computed: {
    isRegisterDisabled() {
      return !this.email || !this.agree;
    },
  },
  methods: {
    handleRegister() {
      this.showRegisterAlert = true;

      setTimeout(() => {
        this.showRegisterAlert = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-register {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
