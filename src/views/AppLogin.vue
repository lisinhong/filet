<template>
  <div class="app-login">
    <div class="account-container">
      <div class="account-header">
        <div class="company">
          <i><icon-polygon /></i>
          <span>Filet</span>
        </div>
        <router-link to="/">Home</router-link>
      </div>
      <div class="account-card">
        <div class="account-greeting">Welcome back ~</div>
        <b-form-group label-for="email" label="Email">
          <b-form-input
            id="email"
            type="email"
            v-model="email"
            placeholder="example@example.com"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="password" label="Password">
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            placeholder="Type your password"
          ></b-form-input>
          <router-link to="forgot-password">Forgot Password?</router-link>
        </b-form-group>
        <b-form-checkbox
          v-model="keepLogIn"
          name="checkbox-1"
          :value="true"
          :unchecked-value="false"
        >
          Keep me logged in
        </b-form-checkbox>
        <button type="button" :disabled="isLoginDisabled" @click="handleLogin">
          Login
        </button>
        <div class="note">
          <span>Don’t have an account?</span>
          <router-link to="register">Create a free account</router-link>
        </div>
      </div>
      <div class="account-footer">
        <a href="#">Privacy Policy</a>
        <a href="#">User Notice</a>
      </div>
    </div>
    <b-alert fade :show="showLoginAlert">
      Opps! Email does not exist or password is invalid
    </b-alert>
  </div>
</template>

<script>
import IconPolygon from "@/components/icons/IconPolygon.vue";

export default {
  name: "AppLogin",
  components: {
    IconPolygon,
  },
  data() {
    return {
      email: null,
      password: null,
      keepLogIn: false,
      showLoginAlert: false,
    };
  },
  computed: {
    isLoginDisabled() {
      return !this.email || !this.password;
    },
  },
  methods: {
    handleLogin() {
      this.showLoginAlert = true;

      setTimeout(() => {
        this.showLoginAlert = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
