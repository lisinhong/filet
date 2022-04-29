<template>
  <div class="app-site-map">
    <div class="logo" @click="$router.push('/')">
      <i>
        <icon-polygon />
      </i>
      <span>Filet</span>
      <i class="icon-close" @click="toggleSidebar">
        <icon-close />
      </i>
    </div>
    <ul class="link-list">
      <li class="link-item">
        <router-link to="/" exact-active-class="active">
          <icon-dashboard />
          <span>Dashboard</span>
        </router-link>
      </li>
      <li class="link-item">
        <router-link to="my-page" exact-active-class="active">
          <icon-my-page />
          <span>My Page</span>
        </router-link>
      </li>
      <li class="link-item">
        <router-link to="products" exact-active-class="active">
          <icon-products />
          <span>Products</span>
        </router-link>
      </li>
      <li class="link-item">
        <router-link to="faq" exact-active-class="active">
          <icon-faq />
          <span>Faq</span>
        </router-link>
      </li>
      <li class="link-item">
        <router-link to="contact" exact-active-class="active">
          <icon-contact />
          <span>Contact</span>
        </router-link>
      </li>
      <div class="divider"></div>
      <ul class="account-setting">
        <li class="link-item">
          <router-link to="profile" exact-active-class="active">
            <icon-account-circle />
            <span>{{ userName }}</span>
          </router-link>
        </li>
        <li class="link-item">
          <router-link to="settings" exact-active-class="active">
            <icon-manage-accounts />
            <span>Settings</span>
          </router-link>
        </li>
        <li class="link-item">
          <a>
            <icon-logout />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import IconPolygon from "@/components/icons/IconPolygon.vue";
import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconMyPage from "@/components/icons/IconMyPage.vue";
import IconProducts from "@/components/icons/IconProducts.vue";
import IconFaq from "@/components/icons/IconFaq.vue";
import IconContact from "@/components/icons/IconContact.vue";
import IconClose from "@/components/icons/IconClose.vue";
import IconAccountCircle from "@/components/icons/IconAccountCircle.vue";
import IconLogout from "@/components/icons/IconLogout.vue";
import IconManageAccounts from "@/components/icons/IconManageAccounts.vue";

export default {
  name: "AppSideBar",
  components: {
    IconPolygon,
    IconDashboard,
    IconMyPage,
    IconProducts,
    IconFaq,
    IconContact,
    IconClose,
    IconAccountCircle,
    IconLogout,
    IconManageAccounts,
  },
  computed: {
    ...mapGetters(["userName"]),
  },
  methods: {
    ...mapMutations(["toggleSidebar"]),
  },
};
</script>

<style lang="scss" scoped>
.app-site-map {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: $brand-dark;
  border-right: 1px solid #e5e5e5;

  .logo {
    flex: 0 0 $header-height;
    display: flex;
    align-items: center;
    padding: 0 20px 0 27px;
    height: $header-height;
    filter: drop-shadow(1px 0px 0px $gray-5);

    > i {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      fill: #c4c4c4;

      &.icon-close {
        display: none;
        margin: 0 0 0 auto;
      }
    }

    > span {
      font-weight: 900;
      font-size: 36px;
      line-height: 42px;
      letter-spacing: 0.02em;
      color: $white;
    }
  }

  .link-list {
    flex: 1 1 auto;
    margin: 0;
    padding: 28px 18px;
    display: flex;
    flex-direction: column;

    .link-item {
      overflow: hidden;

      > a {
        display: flex;
        align-items: center;
        padding: 8px 10px;
        border-radius: 4px;
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: rgba($white, 0.32);
        text-decoration: none;
        transition: 0.2s ease;

        > svg {
          margin-right: 16px;
          fill: rgba($white, 0.32);
        }

        &:hover {
          background-color: $primary-light-4;
          color: $primary-dark-1;
          opacity: 0.6;

          > svg {
            fill: $primary-dark-1;
          }
        }

        &.active {
          background-color: $primary-light-4;
          color: $primary-dark-1;
          opacity: 1;

          > svg {
            fill: $primary-dark-1;
          }
        }
      }

      & + .link-item {
        margin-top: 10px;
      }
    }
  }

  .divider {
    display: none;
    margin: auto -16px 4px;
    width: 100vw;
    height: 1px;
    background-color: $gray-5;
  }

  .account-setting {
    display: none;
    position: relative;
    padding: 0;
  }

  @media screen and (max-device-width: 480px) {
    background: $white;
    border: none;

    .logo {
      border-bottom: 1px solid $gray-5;

      > span {
        color: $brand-dark;
      }

      > i {
        &.icon-close {
          display: block;
        }
      }
    }

    .link-list {
      padding: 20px 16px;

      .link-item {
        > a {
          color: rgba($brand-dark, 0.32);

          > svg {
            fill: rgba($brand-dark, 0.32);
          }
        }
      }
    }

    .account-setting {
      display: block;
    }
  }
}
</style>
