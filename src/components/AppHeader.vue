<template>
  <b-nav tabs class="app-header">
    <b-nav-item @click="toggleSidebar">
      <icon-menu-open fill="white" />
    </b-nav-item>

    <b-nav-item-dropdown v-if="isLogin" no-caret right>
      <template #button-content>
        <span class="user-name">{{ userName }}</span>
        <icon-arrow-down fill="white" />
      </template>
      <b-dropdown-item>
        <router-link to="profile">
          <icon-account-circle fill="#888888" />
          <span>Profile</span>
        </router-link>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item @click="handleLogout">
        <a href="#">
          <icon-logout fill="#888888" />
          <span>Logout</span>
        </a>
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item v-else>
      <button class="btn-register" @click="$router.push('register')">
        Register
      </button>
      <button class="btn-login" @click="$router.push('login')">Login</button>
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
import IconMenuOpen from "@/components/icons/IconMenuOpen.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconAccountCircle from "@/components/icons/IconAccountCircle.vue";
import IconLogout from "@/components/icons/IconLogout.vue";

export default {
  name: "AppHeader",
  components: {
    IconMenuOpen,
    IconArrowDown,
    IconAccountCircle,
    IconLogout,
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isLogin", "userName"]),
  },
  methods: {
    ...mapMutations(["toggleSidebar", "setToken", "setUserInfo", "resetUser"]),
    ...mapActions(["logout"]),
    async handleLogout() {
      try {
        await this.logout({
          token: this.token,
        });

        this.resetUser();
        this.$cookies.remove("token");
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  margin: 0;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  background-color: $brand-dark;
  height: $header-height;

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-link {
      padding: 0;
      border: none;

      &:hover,
      &:focus,
      &:active,
      &:focus-visible {
        border: none !important;
      }
    }

    &.show {
      ::v-deep .dropdown-toggle {
        color: $white;
        background: transparent;
        border: none;
      }
    }

    button {
      padding: 8px 20px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: $white;
      border: none;

      &.btn-register {
        margin-right: 12px;
        text-decoration: underline;
        background: none;
      }

      &.btn-login {
        border-radius: 4px;
        background-color: $primary-dark-1;
      }
    }
  }

  ::v-deep {
    > li {
      padding: 0;
    }

    .dropdown-toggle {
      display: flex;
      align-items: center;
      padding: 0;
      background: transparent;
      border: none !important;

      .user-name {
        margin-right: 8px;
        color: $white;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
      }
    }

    .dropdown-menu {
      margin-top: 11px;
      padding: 0;
      border-radius: 4px;
      background-color: $white;
      overflow: hidden;

      .dropdown-item {
        padding: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: $brand-dark;

        &:focus,
        &:active {
          background: #e9ecef;
        }

        > svg {
          margin-right: 16px;
        }

        > a {
          display: block;
          padding: 16px;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;

          &:focus {
            background: #e9ecef;
          }

          > svg {
            margin-right: 16px;
          }
        }
      }

      .dropdown-divider {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0 24px;

    ::v-deep {
      .dropdown-toggle {
        display: none;
      }
    }
  }
}
</style>
