<template>
  <div class="product-info">
    <div class="info">
      <div class="rate">8%</div>
      <div class="description">
        <p>Period <em>30</em> Days</p>
        <p>Minimum: <em>3,000</em> USDT</p>
      </div>
    </div>
    <button class="btn-redeem" v-if="isRedeemable" @click="handleRedeemClick">
      Redeem
    </button>
    <router-link class="btn-more" to="products" v-else>
      <button>More</button>
    </router-link>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ProductInfo",
  props: {
    isRedeemable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations(["showAppModal"]),
    handleRedeemClick() {
      this.showAppModal({
        modalTitle: "Early Redemption",
        modalPlaceholder: "0",
        modalMax: 1000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.product-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rate {
    margin-right: 30px;
    font-weight: 700;
    font-size: 128px;
    line-height: 150px;
    text-align: center;
    letter-spacing: 0.02em;
    color: $graphy-1;
  }

  .description {
    > p {
      margin: 0;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: $gray-2;

      & + p {
        margin-top: 16px;
      }

      > em {
        color: $brand-dark;
        font-style: normal;
      }
    }
  }

  .btn-more {
    margin: auto 0 0 auto;
    text-decoration: none;
  }

  button {
    margin: auto 0 0 auto;
    padding: 8px 0;
    width: 80px;
    background: $brand-dark;
    border-radius: 22px;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: $white;
  }
}
</style>
