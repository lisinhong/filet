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
import { mapState, mapMutations } from "vuex";
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
  },
  watch: {
    $route() {
      this.hideAppModal();
    },
  },
  methods: {
    ...mapMutations(["hideAppModal"]),
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
    transition: 0.4s ease;
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
    }
  }

  @media screen and (max-device-width: 480px) {
    .app-main {
      .app-content-wrapper {
        padding: 48px 24px;
      }
    }
  }
}
</style>
