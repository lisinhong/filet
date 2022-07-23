<template>
  <div class="app-products">
    <div
      v-for="product in productList"
      :key="product.id"
      class="app-card large"
    >
      <p class="title">
        <span class="dot"></span>
        {{ product.name }}
      </p>
      <div class="content">
        <product-info
          :product="product"
          :apply="product.name === 'Fixed Interest'"
          full-info
        />
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
    ...mapState(["token", "productIdList", "productList"]),
    ...mapGetters(["isLogin"]),
  },
  async created() {
    const productList = [];
    const { data } = await this.getProductIdList();
    const productIdList = data.map((item) => item.id);

    this.setProductIdList(productIdList);

    for (let i = 0; i < productIdList.length; i++) {
      const id = productIdList[i];
      const { data } = await this.getProduct({ id });

      productList.push(data);
    }
    this.setProductList(productList);

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
    ...mapActions(["getProduct", "getUserAsset", "getProductIdList"]),
    ...mapMutations(["setUserAsset", "setProductIdList", "setProductList"]),
  },
};
</script>

<style lang="scss" scoped>
.app-products {
  border-radius: 4px;
}

.app-card {
  & + .app-card {
    margin-top: 32px;
  }
}
</style>
