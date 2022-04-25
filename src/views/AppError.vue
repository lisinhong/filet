<template>
  <div class="app-error">
    <div class="error-title"><em>500.</em>That’s an error.</div>
    <div class="error-description">
      <em> There was an error. Please try again later. </em>
      That’s all we know.
    </div>
    <a @click="reload">Reload</a>
    <i><icon-face-sweat /></i>
  </div>
</template>

<script>
import IconFaceSweat from "@/components/icons/IconFaceSweat.vue";

export default {
  name: "AppError",
  components: {
    IconFaceSweat,
  },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.app-error {
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
