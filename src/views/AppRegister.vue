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
            placeholder="Type your first name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="lastName" label="Last Name">
          <b-form-input
            id="lastName"
            type="text"
            v-model="lastName"
            placeholder="Type your last name"
          ></b-form-input>
        </b-form-group>
        <div class="password-container">
          <b-form-group class="half" label-for="password" label="Password">
            <b-form-input
              id="password"
              type="password"
              v-model="password"
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
              placeholder="Confirm Password"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="note">
          * At least 8 characters with 1 upper case, 1 lower case, and 1 number.
        </div>
        <button
          type="button"
          :disabled="isRegisterDisabled"
          @click="handleRegister"
        >
          Continue
        </button>
      </div>
      <div class="account-footer">
        <a href="#">Privacy Policy</a>
        <a href="#">User Notice</a>
      </div>
    </div>
    <b-alert fade :show="true">
      {{ passwordAlertText }}
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
      step: 3,
      otp: {
        0: "",
        1: "",
        2: "",
        3: "",
      },
      otpState: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
      showAlert: false,
      alertText: "",
      registerAlertText: "Invalid email. Please type it again!",
      otpAlertText: "Please check your code again!",
      passwordAlertText:
        "Passwords are different. Please re-type your password.",
    };
  },
  computed: {
    isVerifyEmailDisabled() {
      return !this.email || !this.agree;
    },
    isVerifyOtpDisabled() {
      return (
        this.otp[0] === "" ||
        this.otp[1] === "" ||
        this.otp[2] === "" ||
        this.otp[3] === ""
      );
    },
    isRegisterDisabled() {
      return (
        !this.firstName ||
        !this.lastName ||
        !this.password ||
        !this.confirmPassword
      );
    },
  },
  methods: {
    handleVerifyEmail() {},
    handleRegister() {},
    handleVerifyOtp() {},
    handleOtpInput(index) {
      if (index < 3) {
        this.$refs.otp[index + 1].focus();
        return;
      }
      this.$refs.otp[index].blur();
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
      margin-top: auto;
    }
  }

  @media screen and (max-device-width: 480px) {
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
