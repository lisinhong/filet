<template>
  <div class="product-info" :class="{ 'full-info': fullInfo }">
    <div class="info">
      <template v-if="fullInfo">
        <div class="rate">{{ product.rates }}%</div>
        <div class="description">
          <p>
            Period: <em>{{ product.period }}</em> Days
          </p>
          <p>
            Minimum Investment: <em>{{ product.minimal }}</em> USDT
          </p>
          <p>
            Management Fee: <em>{{ product.mfee }}</em> %
          </p>
        </div>
        <div class="description">
          <p>
            Performance Fee: <em>{{ product.pfee }}</em> %
          </p>
          <p>Early Redemption Fee: <em>1</em> % / Day</p>
          <p>
            Max Drawdown: <em>{{ product.mdd }}</em> %
          </p>
        </div>
      </template>
      <template v-else>
        <div class="rate">{{ product.rates }}%</div>
        <div class="description">
          <p>
            Period: <em>{{ product.period }}</em> Days
          </p>
          <p>
            Minimum: <em>{{ product.minimal }}</em> USDT
          </p>
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
import { mapMutations, mapState } from "vuex";

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
  computed: {
    ...mapState(["product", "userAsset", "userFixedInterestRate"]),
  },
  methods: {
    ...mapMutations(["showAppModal"]),
    handleRedeemClick() {
      this.showAppModal({
        type: "redeem",
        max: this.userFixedInterestRate.interest,
      });
    },
    handleApplyClick() {
      this.showAppModal({
        type: "apply",
        max: this.userAsset.cash,
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

  @media screen and (max-device-width: 480px) {
    .info {
      flex-direction: column;
      align-items: stretch;
    }

    .btn-more,
    button {
      margin: 48px auto 0;
    }

    .rate {
      margin: 0;
    }

    .description {
      margin: 0 40px;

      & + .description {
        margin-top: 16px;
      }
    }
  }
}
</style>
