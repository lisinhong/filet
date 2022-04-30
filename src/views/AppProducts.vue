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
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "AppProduct",
  components: {
    ProductInfo,
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isLogin"]),
  },
  created() {
    this.getProduct({ id: "0" }).then((response) =>
      this.setProduct(response.data)
    );

    if (!this.isLogin) {
      return;
    }
    this.getUserAsset({
      token: this.token,
    }).then((response) => {
      this.setUserAsset(response.data);
    });
  },
  methods: {
    ...mapActions(["getProduct", "getUserAsset"]),
    ...mapMutations(["setProduct", "setUserAsset"]),
  },
};
</script>

<style lang="scss" scoped>
.app-products {
  background-color: $white;
  border-radius: 4px;
}
</style>
