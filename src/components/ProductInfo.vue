<template>
  <div class="product-info" :class="{ 'full-info': fullInfo }">
    <div class="info">
      <template v-if="fullInfo">
        <div class="rate">8%</div>
        <div class="description">
          <p>Period: <em>30</em> Days</p>
          <p>Minimum Investment: <em>3,000</em> USDT</p>
          <p>Management Fee: <em>3,000</em> %</p>
        </div>
        <div class="description">
          <p>Performance Fee: <em>0</em> %</p>
          <p>Early Redemption Fee: <em>1</em> % / Day</p>
          <p>Max Drawdown: <em>0</em> %</p>
        </div>
      </template>
      <template v-else>
        <div class="rate">8%</div>
        <div class="description">
          <p>Period: <em>30</em> Days</p>
          <p>Minimum: <em>3,000</em> USDT</p>
        </div>
      </template>
    </div>
    <button v-if="redeem" @click="handleRedeemClick">Redeem</button>
    <button v-else-if="apply" @click="handleApplyClick">Apply</button>
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
    redeem: {
      type: Boolean,
      default: false,
    },
    apply: {
      type: Boolean,
      default: false,
    },
    fullInfo: {
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
    handleApplyClick() {
      this.showAppModal({
        modalTitle: "Apply",
        modalPlaceholder: "0",
        modalMax: 65000,
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

  &.full-info {
    .info {
      justify-content: space-around;
    }
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
    letter-spacing: 0.02em;
    color: $white;
  }
}
</style>
