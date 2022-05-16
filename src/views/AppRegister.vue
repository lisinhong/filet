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
      <div class="account-card step-1" v-if="step === 1">
        <div class="account-greeting">Create Account</div>
        <b-form-group label-for="email" label="Email">
          <b-form-input
            id="email"
            type="email"
            v-model="email"
            :state="emailState"
            placeholder="example@example.com"
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
          v-model="agree"
          name="checkbox-1"
          :value="true"
          :unchecked-value="false"
        >
          I agree to the
          <router-link to="terms">Terms of Services.</router-link>
        </b-form-checkbox>
        <button
          type="button"
          :disabled="isVerifyEmailDisabled"
          @click="handleVerifyEmail"
        >
          Verify your email
        </button>
        <div class="note">
          <span>Already have an account?</span>
          <router-link to="login">Login</router-link>
        </div>
      </div>
      <div class="account-card step-2" v-if="step === 2">
        <div class="account-greeting">Enter the code we sent to your email</div>
        <label>Enter the 4-digit code to verify your email</label>
        <b-input-group>
          <b-form-input
            v-for="(n, index) in 4"
            :key="index"
            ref="otp"
            v-model="otp[index]"
            :state="otpState"
            @input="handleOtpInput(index)"
          ></b-form-input>
        </b-input-group>
        <button
          type="button"
          :disabled="isVerifyOtpDisabled"
          @click="handleVerifyOtp"
        >
          Continue
        </button>
      </div>
      <div class="account-card step-3" v-if="step === 3">
        <div class="account-greeting">Fill out login information</div>
        <b-form-group label-for="firstName" label="First Name">
          <b-form-input
            id="firstName"
            type="text"
            v-model="firstName"
            :state="registerState"
            placeholder="Type your first name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="lastName" label="Last Name">
          <b-form-input
            id="lastName"
            type="text"
            v-model="lastName"
            :state="registerState"
            placeholder="Type your last name"
          ></b-form-input>
        </b-form-group>
        <div class="password-container">
          <b-form-group class="half" label-for="password" label="Password">
            <b-form-input
              id="password"
              type="password"
              v-model="password"
              :state="registerState"
              placeholder="Type your password"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="half"
            label-for="confirmPassword"
            label="Confirm Password"
          >
            <b-form-input
              id="confirmPassword"
              type="password"
              v-model="confirmPassword"
              :state="registerState"
              placeholder="Confirm Password"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="note">
          * At least 8 characters with 1 upper case, 1 lower case, and 1 number.
        </div>
        <b-form-group label-for="referrer" label="Referrer">
          <b-form-input
            id="referrer"
            type="text"
            v-model="referrer"
            :state="registerState"
            placeholder="Type your referrer"
          ></b-form-input>
        </b-form-group>
        <button
          type="button"
          :disabled="isRegisterDisabled"
          @click="handleRegister"
        >
          Continue
        </button>
      </div>
      <div class="account-footer">
        <router-link to="privacy">Privacy Policy</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import IconPolygon from "@/components/icons/IconPolygon.vue";

export default {
  name: "AppRegister",
  components: {
    IconPolygon,
  },
  data() {
    return {
      isLoading: false,
      email: null,
      agree: false,
      step: 1,
      otp: {
        0: "",
        1: "",
        2: "",
        3: "",
      },
      emailState: null,
      otpState: null,
      registerState: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
      referrer: null,
    };
  },
  computed: {
    isVerifyEmailDisabled() {
      return !this.email || !this.agree || this.isLoading;
    },
    isVerifyOtpDisabled() {
      return (
        this.otp[0] === "" ||
        this.otp[1] === "" ||
        this.otp[2] === "" ||
        this.otp[3] === "" ||
        this.isLoading
      );
    },
    isRegisterDisabled() {
      return (
        !this.firstName ||
        !this.lastName ||
        !this.password ||
        !this.confirmPassword ||
        this.isLoading
      );
    },
  },
  methods: {
    ...mapActions(["verifyEmail", "verifyOTP", "register"]),
    ...mapMutations(["showAlert", "hideAlert"]),
    async handleVerifyEmail() {
      this.isLoading = true;
      this.emailState = null;

      try {
        await this.verifyEmail({
          email: this.email,
        });
        this.step = 2;
      } catch (error) {
        this.emailState = false;
        this.handleError(error?.response?.data?.message);
      } finally {
        this.isLoading = false;
      }
    },
    async handleVerifyOtp() {
      this.isLoading = true;
      this.otpState = null;

      try {
        await this.verifyOTP({
          email: this.email,
          otpCode: Object.values(this.otp).join(""),
        });
        this.step = 3;
      } catch (error) {
        this.otpState = false;
        this.handleError(error?.response?.data?.message);
      } finally {
        this.isLoading = false;
      }
    },
    async handleRegister() {
      this.isLoading = true;
      this.registerState = null;

      if (this.password !== this.confirmPassword) {
        this.handleError(
          "Passwords are different. Please re-type your password."
        );
      }

      try {
        await this.register({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          referralFrom: this.referrer,
        });
        this.$router.replace("login");

        this.showAlert({
          variant: "success",
          text: "Register successfully.",
        });

        setTimeout(() => {
          this.hideAlert();
        }, 3000);
      } catch (error) {
        this.registerState = false;
        this.handleError(error?.response?.data?.message);
      } finally {
        this.isLoading = false;
      }
    },
    handleOtpInput(index) {
      if (index < 3) {
        this.$refs.otp[index + 1].focus();
        return;
      }
      this.$refs.otp[index].blur();
    },
    handleError(message) {
      this.showAlert({
        text: message,
      });

      setTimeout(() => {
        this.hideAlert();
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

  .step-2 {
    label {
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: $brand-dark;
    }

    .input-group {
      gap: 24px;

      input {
        padding-left: 10px;
        padding-right: 10px;
        height: 44px;
        border-radius: 4px !important;
        text-align: center;

        &.form-control.is-invalid {
          padding: 6px 12px;
          background: none;
          border-color: #ff4d4f;
        }
      }
    }

    button {
      margin-top: auto;
    }
  }

  .step-3 {
    .password-container {
      margin: 24px 0 8px;
      display: flex;
      align-items: center;
    }

    .form-group {
      flex: 0 1 auto;

      &.half {
        margin: 0;
        width: 50%;

        & + .half {
          margin-left: 24px;
        }
      }
    }

    button {
      margin-top: 56px;
    }
  }

  @media screen and (max-width: 480px) {
    .step-3 {
      .password-container {
        flex-wrap: wrap;

        .half {
          width: 100%;

          & + .half {
            margin-top: 24px;
            margin-left: 0;
          }
        }
      }

      button {
        margin-top: 56px;
      }
    }
  }
}
</style>
