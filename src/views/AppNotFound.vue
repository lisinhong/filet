<template>
  <div class="app-not-found">
    <div class="error-title"><em>404.</em>That’s an error.</div>
    <div class="error-description">
      <em> The requested URL/badpage was not found on this server. </em>
      That’s all we know.
    </div>
    <router-link to="/">Back to Home</router-link>
    <i><icon-face-sweat /></i>
  </div>
</template>

<script>
import IconFaceSweat from "@/components/icons/IconFaceSweat.vue";

export default {
  name: "AppNotFound",
  components: {
    IconFaceSweat,
  },
};
</script>

<style lang="scss" scoped>
.app-not-found {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 96px 56px;

  .error-title {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.02em;
    color: $gray-2;

    em {
      font-style: normal;
      font-weight: 700;
      margin-right: 8px;
      color: $brand-dark;
    }
  }

  .error-description {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: $gray-2;

    em {
      font-weight: 500;
      font-style: normal;
      color: $brand-dark;
    }
  }

  a {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: $primary-dark-1;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: $primary-dark-1;
      text-decoration: underline;
    }
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 56px;
    right: 96px;
    fill: #888888;
    svg {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
