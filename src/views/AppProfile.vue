<template>
  <div class="app-profile">
    <div class="account-info">
      <div class="setting-title">Account Info.</div>
      <div class="input-container">
        <b-form-group label-for="first-name" label="First name">
          <b-form-input id="first-name" v-model="newFirstName"></b-form-input>
        </b-form-group>
        <b-form-group label-for="last-name" label="Last name">
          <b-form-input id="last-name" v-model="newLastName"></b-form-input>
        </b-form-group>
        <b-form-group label-for="email" label="Email">
          <b-form-input
            id="email"
            type="email"
            v-model="newEmail"
            placeholder="example@example.com"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="phone-number" label="Phone number (Optional)">
          <b-form-input
            id="phone-number"
            type="tel"
            v-model="newMobile"
            placeholder="+1 123456789"
          ></b-form-input>
        </b-form-group>
        <div class="button-container">
          <button
            :disabled="isUpdateUserInfoDisabled"
            @click="handleUpdateUserInfoClick"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    <div class="change-password">
      <div class="setting-title">Change Password</div>
      <div class="input-container">
        <b-form-group label-for="old-password" label="Old password">
          <b-form-input
            id="old-password"
            type="password"
            v-model="oldPassword"
            placeholder="Your answer"
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="new-password" label="New password">
          <b-form-input
            id="new-password"
            type="password"
            v-model="newPassword"
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
            type="password"
            v-model="confirmNewPassword"
            placeholder="Your answer"
          ></b-form-input>
        </b-form-group>
        <div class="button-container">
          <button
            :disabled="isChangePasswordDisabled"
            @click="handleChangePasswordClick"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "AppProfile",
  data() {
    return {
      oldPassword: null,
      newPassword: null,
      confirmNewPassword: null,
      newFirstName: null,
      newLastName: null,
      newEmail: null,
      newMobile: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["userInfo", "token"]),
    ...mapGetters(["userName"]),
    isUpdateUserInfoDisabled() {
      return (
        (this.newFirstName === this.userInfo.firstName &&
          this.newLastName === this.userInfo.lastName &&
          this.newEmail === this.userInfo.email &&
          this.newMobile === this.userInfo.mobile) ||
        this.isLoading
      );
    },
    isChangePasswordDisabled() {
      return (
        !this.oldPassword ||
        !this.newPassword ||
        !this.confirmNewPassword ||
        this.isLoading
      );
    },
  },
  watch: {
    "userInfo.firstName": {
      handler(firstName) {
        this.newFirstName = firstName;
      },
      immediate: true,
    },
    "userInfo.lastName": {
      handler(lastName) {
        this.newLastName = lastName;
      },
      immediate: true,
    },
    "userInfo.email": {
      handler(email) {
        this.newEmail = email;
      },
      immediate: true,
    },
    "userInfo.mobile": {
      handler(mobile) {
        this.newMobile = mobile;
      },
      immediate: true,
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
  },
  methods: {
    ...mapActions(["updateUserInfo", "changePassword", "getUserInfo"]),
    ...mapMutations(["setUserInfo", "showAlert", "hideAlert"]),
    async handleUpdateUserInfoClick() {
      this.isLoading = true;

      try {
        await this.updateUserInfo({
          token: this.token,
          email: this.newEmail,
          mobile: this.newMobile,
          firstName: this.newFirstName,
          lastName: this.newLastName,
        });

        this.showAlert({
          text: "Update successfully.",
          variant: "success",
        });

        const userInfoResponse = await this.getUserInfo({
          token: this.token,
        });

        this.setUserInfo(userInfoResponse.data);
      } catch (error) {
        this.showAlert({
          text: error?.response?.data?.message,
        });
      } finally {
        setTimeout(() => {
          this.hideAlert();
        }, 3000);
        this.isLoading = false;
      }
    },
    async handleChangePasswordClick() {
      if (this.newPassword !== this.confirmNewPassword) {
        this.showAlert({
          variant: "success",
          text: "Passwords are different. Please re-type your password.",
        });

        setTimeout(() => {
          this.hideAlert();
        }, 3000);

        return;
      }

      this.isLoading = true;

      try {
        await this.changePassword({
          token: this.token,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        });
        this.oldPassword = null;
        this.newPassword = null;
        this.confirmNewPassword = null;
        this.showAlert({
          text: "Update successfully.",
          variant: "success",
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
.app-profile {
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

    .input-container {
      border: none;
    }

    .form-group {
      flex: 1 1 100%;
      margin-left: 0 !important;
    }
  }

  @media screen and (max-device-width: 699px) {
    padding: 0;

    .account-info {
      flex-direction: column;
    }

    .setting-title {
      margin-bottom: 36px;
    }

    .input-container {
      .form-group {
        flex: 1 1 100%;
        width: 100%;

        &:nth-child(2n) {
          margin-left: 0;
        }
      }
    }

    .change-password {
      flex-direction: column;
    }
  }
}
</style>
