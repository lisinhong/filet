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
            :state="loginState"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="password" label="Password">
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            placeholder="Type your password"
            :state="loginState"
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
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
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
      keepLogIn: true,
      loginState: null,
      isLoading: false,
    };
  },
  computed: {
    isLoginDisabled() {
      return !this.email || !this.password || this.isLoading;
    },
  },
  methods: {
    ...mapActions(["login", "getUserInfo"]),
    ...mapMutations(["setToken", "setUserInfo", "showAlert", "hideAlert"]),
    async handleLogin() {
      this.loginState = null;
      this.isLoading = true;

      try {
        const loginResponse = await this.login({
          email: this.email,
          password: this.password,
        });

        const token = loginResponse.data.token;

        this.setToken(token);

        if (this.keepLogIn) {
          this.$cookies.set("token", token);
        } else {
          this.$cookies.remove("token");
        }

        const userInfoResponse = await this.getUserInfo({
          token: token,
        });

        this.setUserInfo(userInfoResponse.data);
        this.$router.replace("/");
      } catch (error) {
        this.loginState = false;
        this.showAlert({
          text: error?.response?.data?.message,
        });

        setTimeout(() => {
          this.hideAlert();
        }, 3000);
      } finally {
        this.isLoading = false;
      }
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

  @media screen and (max-device-width: 480px) {
    .custom-checkbox {
      margin-top: 12px;
    }

    .note {
      span {
        display: block;
      }

      a {
        margin: 16px 0 0 0;
      }
    }
  }
}
</style>
