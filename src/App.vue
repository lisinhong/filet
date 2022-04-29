<template>
  <div
    id="app"
    :class="{ 'has-sidebar': showSidebar && $route.meta.showAppSidebar }"
  >
    <aside class="app-sidebar" v-if="$route.meta.showAppSidebar">
      <app-site-map />
    </aside>
    <main class="app-main" :class="{ 'white-background': whiteBackground }">
      <div class="app-header-wrapper" v-if="$route.meta.showAppHeader">
        <app-header />
      </div>
      <div class="app-info-wrapper" v-if="$route.meta.showAppInfo">
        <app-info />
      </div>
      <div class="app-content-wrapper">
        <router-view />
      </div>
    </main>
    <app-modal />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppSiteMap from "@/components/AppSiteMap.vue";
import AppInfo from "@/components/AppInfo.vue";
import AppModal from "@/components/AppModal.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSiteMap,
    AppInfo,
    AppModal,
  },
  computed: {
    ...mapState(["showSidebar"]),
    whiteBackground() {
      return this.$route.name === "Profile" || this.$route.name === "Settings";
    },
    isMobile() {
      return document.documentElement.clientWidth < 481;
    },
  },
  async created() {
    const token = this.$cookies.get("token");

    if (token) {
      this.setToken(token);
    }

    const userInfoResponse = await this.getUserInfo({
      token: token,
    });

    this.setUserInfo(userInfoResponse.data);
  },
  beforeMount() {
    if (this.isMobile && this.showSidebar) {
      this.toggleSidebar();
    }
  },
  watch: {
    $route() {
      this.hideAppModal();

      if (this.isMobile && this.showSidebar) {
        this.toggleSidebar();
      }
    },
  },
  methods: {
    ...mapMutations([
      "hideAppModal",
      "toggleSidebar",
      "setToken",
      "setUserInfo",
    ]),
    ...mapActions(["getUserInfo"]),
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;

  .app-sidebar {
    margin-left: -$sidebar-width;
    flex: 0 0 $sidebar-width;
    transition: 0.4s ease;
  }

  .app-main {
    flex: 1 1 auto;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    &.white-background {
      background-color: $white;
    }

    .app-content-wrapper {
      flex: 1 1 auto;
      padding: 32px 72px;
    }
  }

  &.has-sidebar {
    .app-sidebar {
      margin-left: 0;
    }

    .app-main {
      max-width: calc(100% - #{$sidebar-width});
      transition: 0.4s ease;
    }
  }

  @media screen and (max-device-width: 480px) {
    .app-main {
      max-width: 100%;

      .app-content-wrapper {
        padding: 48px 24px;
      }
    }

    .app-sidebar {
      margin: 0;
      position: fixed;
      width: 100vw;
      min-height: 100%;
      top: 0;
      left: -100vw;
      z-index: 100;
    }

    &.has-sidebar {
      .app-main {
        max-width: 100%;
      }

      .app-sidebar {
        margin-left: 0;
        left: 0;
      }
    }
  }
}
</style>
