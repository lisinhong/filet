<template>
  <div class="app-site-map">
    <div class="logo">
      <icon-polygon />
      <span>Filet</span>
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
    </ul>
  </div>
</template>

<script>
import IconPolygon from "@/components/icons/IconPolygon.vue";
import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconMyPage from "@/components/icons/IconMyPage.vue";
import IconProducts from "@/components/icons/IconProducts.vue";
import IconFaq from "@/components/icons/IconFaq.vue";
import IconContact from "@/components/icons/IconContact.vue";

export default {
  name: "AppSideBar",
  components: {
    IconPolygon,
    IconDashboard,
    IconMyPage,
    IconProducts,
    IconFaq,
    IconContact,
  },
};
</script>

<style lang="scss" scoped>
.app-site-map {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: $brand-dark;
  border-right: 1px solid #e5e5e5;

  .logo {
    display: flex;
    align-items: center;
    padding-left: 27px;
    height: $header-height;
    filter: drop-shadow(1px 0px 0px $gray-5);

    > svg {
      margin-right: 16px;
      fill: #c4c4c4;
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
    margin: 0;
    padding: 28px 18px;

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

      &.link-item {
        margin-top: 10px;
      }
    }
  }
}
</style>
