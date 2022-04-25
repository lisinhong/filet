<template>
  <div class="app-products">
    <div class="app-card large">
      <p class="title">
        <span class="dot"></span>
        Fixed Interest
      </p>
      <div class="content">
        <product-info apply full-info />
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "AppProduct",
  components: {
    ProductInfo,
  },
};
</script>

<style lang="scss" scoped>
.app-products {
  background-color: $white;
  border-radius: 4px;
}
</style>
