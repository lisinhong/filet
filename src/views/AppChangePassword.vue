<template>
  <div class="app-change-password">
    <div class="change-password">
      <div class="setting-title">Change Password</div>
      <div class="input-container">
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
import { mapMutations, mapActions } from "vuex";

export default {
  name: "AppChangePassword",
  data() {
    return {
      newPassword: null,
      confirmNewPassword: null,
      isLoading: false,
    };
  },
  computed: {
    isChangePasswordDisabled() {
      return !this.newPassword || !this.confirmNewPassword || this.isLoading;
    },
  },
  methods: {
    ...mapActions(["changePassword"]),
    ...mapMutations(["showAlert", "hideAlert"]),
    async handleChangePasswordClick() {
      if (this.newPassword !== this.confirmNewPassword) {
        this.showAlert({
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
          otpCode: this.$route.query.otp,
          newPassword: this.newPassword,
        });
        this.newPassword = null;
        this.confirmNewPassword = null;
        this.showAlert({
          text: "Update successfully.",
          variant: "success",
        });
        this.$router.replace("/login");
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
.app-change-password {
  width: 100%;
  height: 100%;
  padding: 16px 56px;
  display: flex;
  flex-direction: column;

  .setting-title {
    min-width: 20%;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: $black;
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
