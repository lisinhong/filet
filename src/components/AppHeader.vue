<template>
  <b-nav tabs class="app-header">
    <b-nav-item @click="toggleSideBar">
      <icon-menu-open fill="white" />
    </b-nav-item>

    <b-nav-item-dropdown v-if="isLogin" no-caret right>
      <template #button-content>
        <span class="user-name">{{ userName }}</span>
        <icon-arrow-down fill="white" />
      </template>
      <b-dropdown-item>
        <icon-account-circle fill="#888888" />
        <span>Profile</span>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item>
        <icon-manage-accounts fill="#888888" />
        <span>Settings</span>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item>
        <icon-logout fill="#888888" />
        <span>Logout</span>
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item v-else>
      <button class="btn-register">Register</button>
      <button class="btn-login">Login</button>
    </b-nav-item>
  </b-nav>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import IconMenuOpen from "@/components/icons/IconMenuOpen.vue";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconAccountCircle from "@/components/icons/IconAccountCircle.vue";
import IconManageAccounts from "@/components/icons/IconManageAccounts.vue";
import IconLogout from "@/components/icons/IconLogout.vue";

export default {
  name: "AppHeader",
  components: {
    IconMenuOpen,
    IconArrowDown,
    IconAccountCircle,
    IconManageAccounts,
    IconLogout,
  },
  computed: {
    ...mapState(["isLogin", "userName"]),
  },
  methods: {
    ...mapMutations(["toggleSideBar"]),
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
        padding: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: $brand-dark;

        > svg {
          margin-right: 16px;
        }

        &:focus {
          background: #e9ecef;
        }
      }

      .dropdown-divider {
        margin: 0;
      }
    }
  }
}
</style>
