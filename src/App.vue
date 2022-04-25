<template>
  <div id="app" :class="{ 'has-sidebar': showSidebar }">
    <aside class="app-sidebar">
      <app-site-map />
    </aside>
    <main class="app-main">
      <div class="app-header-wrapper">
        <app-header />
      </div>
      <div class="app-info-wrapper">
        <app-info />
      </div>
      <div class="app-content-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppSiteMap from "@/components/AppSiteMap.vue";
import AppInfo from "@/components/AppInfo.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSiteMap,
    AppInfo,
  },
  computed: {
    ...mapState(["showSidebar"]),
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
}
</style>
