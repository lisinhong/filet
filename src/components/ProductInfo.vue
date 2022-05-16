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
            Minimum Investment:
            <em>{{ numeral(product.minimal).format("0,0.00", Math.floor) }}</em>
            USDT
          </p>
          <p>
            Management Fee: <em>{{ product.mfee }}</em> %
          </p>
        </div>
        <div class="description">
          <p>
            Performance Fee:
            <em>{{ numeral(product.pfee).format("0,0.00", Math.floor) }}</em>
            %
          </p>
          <p>Early Redemption Fee: <em>1</em> % / Day</p>
          <p>
            Max Drawdown: <em>{{ numeral(product.mdd).format("0,0.00") }}</em> %
          </p>
        </div>
      </template>
      <template v-else>
        <div class="rate">{{ product.rates }}%</div>
        <div class="description">
          <template v-if="redeem">
            <p>
              Expect Interest:
              <em>
                {{
                  numeral(userFixedInterestRate.interest).format(
                    "0,0.00",
                    Math.floor
                  )
                }}
              </em>
              USDT
            </p>
            <p>
              Maturity Date:
              <em>
                {{ userFixedInterestRate.remainDay }}
              </em>
              Day(s) Remain
            </p>
          </template>
          <template v-else>
            <p>
              Period: <em>{{ product.period }}</em> Days
            </p>
            <p>
              Minimum:
              <em>{{
                numeral(product.minimal).format("0,0.00", Math.floor)
              }}</em>
              USDT
            </p>
          </template>
        </div>
      </template>
    </div>
    <div class="button-list">
      <button v-if="redeem" class="btn-redeem" @click="handleRedeemClick">
        Redeem
      </button>
      <button v-if="apply" @click="handleApplyClick">Apply</button>
      <router-link class="btn-more" to="products" v-if="!redeem && !apply">
        <button>More</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import numeral from "numeral";

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
    ...mapState(["product", "userAsset", "userFixedInterestRate", "token"]),
  },
  methods: {
    ...mapMutations(["showAppModal"]),
    numeral,
    handleRedeemClick() {
      this.showAppModal({
        type: "redeem",
        max: this.userFixedInterestRate.interest,
      });
    },
    handleApplyClick() {
      if (!this.token) {
        this.$router.push("login");
        return;
      }
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

  .button-list {
    margin: auto 0 0 auto;
  }

  .btn-more {
    text-decoration: none;
  }

  .btn-redeem {
    color: $brand-dark;
    background-color: #ffffff;
    border: 1px solid $brand-dark;
  }

  button {
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

    & + button {
      margin-left: 12px;
    }
  }

  @media screen and (max-width: 480px) {
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

  @media screen and (max-width: 839px) {
    &.full-info {
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
}
</style>
