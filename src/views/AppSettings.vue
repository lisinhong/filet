<template>
  <div class="app-settings">
    <div class="account-info">
      <div class="setting-title">Account Info.</div>
      <div class="input-container">
        <b-form-group label-for="first-name" label="First name">
          <b-form-input
            id="first-name"
            :value="firstName"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="last-name" label="Last name">
          <b-form-input
            id="last-name"
            :value="lastName"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="email" label="Email">
          <b-form-input id="email" v-model="email"></b-form-input>
        </b-form-group>
        <b-form-group label-for="phone-number" label="Phone number (Optional)">
          <b-form-input
            id="phone-number"
            v-model="phoneNumber"
            placeholder="+1 123456789"
          ></b-form-input>
        </b-form-group>
        <div class="button-container">
          <button :disabled="isAccountInfoDisabled">Update</button>
        </div>
      </div>
    </div>
    <div class="change-password">
      <div class="setting-title">Change Password</div>
      <div class="input-container">
        <b-form-group label-for="old-password" label="Old password">
          <b-form-input
            id="old-password"
            :value="oldPassword"
            placeholder="Your answer"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="new-password" label="New password">
          <b-form-input
            id="new-password"
            :value="newPassword"
            placeholder="Your answer"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label-for="confirm-new-password"
          label="Confirm new password"
          description="* At least 8 characters with 1 upper case, 1 lower case, and 1 number."
        >
          <b-form-input
            id="confirm-new-password"
            :value="confirmNewPassword"
            placeholder="Your answer"
          ></b-form-input>
        </b-form-group>
        <div class="button-container">
          <button :disabled="isChangePasswordDisabled">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "AppSettings",
  data() {
    return {
      email: null,
      phoneNumber: null,
      oldPassword: null,
      newPassword: null,
      confirmNewPassword: null,
    };
  },
  computed: {
    ...mapState(["firstName", "lastName"]),
    ...mapGetters(["userName"]),
    isAccountInfoDisabled() {
      return !this.email && !this.phoneNumber;
    },
    isChangePasswordDisabled() {
      return !this.oldPassword && !this.newPassword && !this.confirmNewPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-settings {
  width: 100%;
  height: 100%;
  padding: 16px 56px;
  display: flex;
  flex-direction: column;

  .account-info {
    display: flex;
  }

  .setting-title {
    min-width: 20%;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: $black;
  }

  .personal-info {
    display: flex;
    flex-direction: column;
    width: 664px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: $brand-dark;
  }

  .user-name {
    margin: 24px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: $brand-dark;
  }

  .input-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #ebedef;

    .form-group {
      margin-bottom: 24px;
      flex: 0 1 calc(50% - 12px);

      &:nth-child(2n) {
        margin-left: 24px;
      }

      input {
        padding: 13px 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: $brand-dark;

        &::placeholder {
          color: $gray-5;
        }
      }

      ::v-deep {
        label {
          margin-bottom: 8px;
        }

        small {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.02em;
          color: $gray-2;
        }
      }
    }
  }

  .button-container {
    margin: 24px 0 48px;
    width: 100%;
    display: flex;

    button {
      margin-left: auto;
      width: 88px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      border: none;
      background: $brand-dark;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.02em;
      color: $white;

      &:disabled {
        background-color: $gray-8;
        color: $gray-6;
        cursor: not-allowed;
      }
    }
  }

  .change-password {
    margin-top: 48px;
    display: flex;

    .form-group {
      flex: 1 1 100%;
      margin-left: 0 !important;
    }
  }
}
</style>
