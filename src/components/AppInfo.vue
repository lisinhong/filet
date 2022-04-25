<template>
  <div class="app-info">
    <p class="page-title">{{ pageTitle }}</p>
    <p class="greeting">{{ greeting }}</p>
    <div class="divider"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "AppInfo",
  computed: {
    ...mapState(["userName"]),
    ...mapGetters(["isLogin"]),
    pageTitle() {
      return this.$route.name;
    },
    greeting() {
      if (this.isLogin) {
        return `Good day, ${this.userName}!`;
      }
      return "Good day!";
    },
  },
};
</script>

<style lang="scss" scoped>
.app-info {
  position: relative;
  padding: 28px 72px;
  background-color: $white;

  .page-title {
    margin: 0 0 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: rgba($brand-dark, 0.32);
  }

  .greeting {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: $brand-dark;
  }

  .divider {
    position: absolute;
    left: 72px;
    right: 72px;
    bottom: -1px;
    height: 1px;
    background-color: #ebedef;
  }
}
</style>
