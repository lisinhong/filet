<template>
  <div id="app" :class="{ 'has-sidebar': showSidebar }">
    <aside class="app-sidebar">
      <app-site-map />
    </aside>
    <main class="app-main">
      <app-header />
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "@/components/AppHeader.vue";
import AppSiteMap from "@/components/AppSiteMap.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSiteMap,
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
    transition: 0.4s ease;
  }

  &.has-sidebar {
    .app-sidebar {
      margin-left: 0;
    }
  }
}
</style>
