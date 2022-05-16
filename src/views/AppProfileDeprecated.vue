<template>
  <div class="app-profile">
    <div class="personal-title">Personal info.</div>
    <div class="personal-info">
      <div class="user-name">{{ userName }}</div>
      <div class="input-container">
        <b-form-group label-for="first-name" label="First name">
          <b-form-input
            id="first-name"
            :value="userInfo.firstName"
            readonly
          ></b-form-input>
        </b-form-group>
        <b-form-group label-for="last-name" label="Last name">
          <b-form-input
            id="last-name"
            :value="userInfo.lastName"
            readonly
          ></b-form-input>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "AppProfile",
  computed: {
    ...mapState(["userInfo"]),
    ...mapGetters(["userName"]),
  },
};
</script>

<style lang="scss" scoped>
.app-profile {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px 56px;
  display: flex;

  .personal-title {
    margin-right: 72px;
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

    .form-group {
      flex: 0 1 50%;

      & + .form-group {
        margin-left: 24px;
      }

      ::v-deep {
        label {
          margin-bottom: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    flex-wrap: wrap;
    padding: 0;

    .personal-info {
      width: 100%;
    }

    .input-container {
      flex-wrap: wrap;

      .form-group {
        flex: 0 0 100%;

        & + .form-group {
          margin: 24px 0 0;
        }
      }
    }
  }
}
</style>
