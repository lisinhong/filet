<template>
  <i>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      :aria-labelledby="iconName"
      role="presentation"
    >
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
  </i>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
