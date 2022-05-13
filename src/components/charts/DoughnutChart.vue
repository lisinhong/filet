<template>
  <div class="doughnut-chart">
    <div class="chart-container">
      <doughnut-chart-base
        :width="width"
        :height="height"
        :plugins="[htmlLegendPlugin]"
        :chartData="chartData"
        :chartOptions="chartOptions"
      />
    </div>
    <div class="more-info">
      <div class="legend-container"></div>
      <div class="button-list" v-if="enableActions">
        <button
          class="btn-withdraw"
          :disabled="isEmpty"
          @click="handleWithdrawClick"
        >
          Withdraw
        </button>
        <button
          class="btn-deposit"
          :disabled="!isLogin"
          @click="handleDepositClick"
        >
          Deposit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import numeral from "numeral";
import DoughnutChartBase from "@/components/charts/DoughnutChartBase.vue";

const getOrCreateLegendList = () => {
  const legendContainer = document.querySelector(".legend-container");
  let listContainer = legendContainer.querySelector("ul");

  if (!listContainer) {
    listContainer = document.createElement("ul");

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

export default {
  components: {
    DoughnutChartBase,
  },
  props: {
    chartData: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Array | Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: false,
    },
    width: {
      type: Number,
      default: 175,
    },
    height: {
      type: Number,
      default: 175,
    },
    hasButtons: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
    enableActions: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      htmlLegendPlugin: {
        id: "htmlLegend",
        afterUpdate(chart) {
          const ul = getOrCreateLegendList();

          // Remove old legend items
          while (ul.firstChild) {
            ul.firstChild.remove();
          }

          // Reuse the built-in legendItems generator
          const items =
            chart.options.plugins.legend.labels.generateLabels(chart);

          items.forEach((item, index) => {
            if (!item.text) {
              return;
            }
            const li = document.createElement("li");
            const boxSpan = document.createElement("span");
            const textContainer1 = document.createElement("p");
            const textContainer2 = document.createElement("p");
            const text = document.createTextNode(item.text);
            const value = document.createTextNode(
              `${numeral(chart.config.data.datasets[0].data[index]).format(
                "0,0.00",
                Math.floor
              )} USDT`
            );

            boxSpan.style.backgroundColor =
              chart?.config?.data?.datasets[0]?.backgroundColor[index];
            textContainer2.style.color = "#292B2B";
            textContainer1.appendChild(boxSpan);
            textContainer1.appendChild(text);
            textContainer2.appendChild(value);

            li.appendChild(textContainer1);
            li.appendChild(textContainer2);
            ul.appendChild(li);
          });
        },
      },
    };
  },
  computed: {
    ...mapState(["userAsset"]),
    ...mapGetters(["isLogin"]),
  },
  methods: {
    ...mapMutations(["showAppModal"]),
    numeral,
    handleWithdrawClick() {
      this.showAppModal({
        type: "withdraw",
        max: this.userAsset.cash,
      });
    },
    handleDepositClick() {
      this.showAppModal({
        type: "deposit",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.doughnut-chart {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: stretch;

  .chart-container {
    flex: 0 0 175px;
    width: 175px;
  }

  .more-info {
    flex: 0 1 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
  }

  .legend-container {
    margin-bottom: auto;
    display: flex;
    flex-direction: column;

    ::v-deep {
      > ul {
        margin-left: 50px;
        padding: 0;
        list-style-type: none;

        > li {
          & + li {
            margin-top: 16px;
          }

          p {
            position: relative;
            margin: 0;
            padding-left: 24px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.02em;

            &:first-child {
              margin-bottom: 8px;
              color: $gray-2;
            }
          }

          span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
        }
      }
    }
  }

  .button-list {
    margin: 0 0 0 50px;
    display: flex;

    button {
      padding: 8px 16px;
      border-radius: 22px;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.02em;
      border: 1px solid $brand-dark;

      &.btn-withdraw {
        margin-right: 12px;
        color: $brand-dark;
        background-color: $white;

        &:disabled {
          border: 1px solid $gray-8;
          color: $gray-6;
        }
      }

      &.btn-deposit {
        color: $white;
        background-color: $brand-dark;
      }

      &:disabled {
        border: 1px solid $gray-8;
        color: $gray-6;
        cursor: not-allowed;

        &.btn-deposit {
          background-color: $gray-8;
        }
      }
    }
  }

  @media screen and (max-device-width: 480px) {
    margin-top: 24px;
    flex-direction: column;

    .legend-container {
      margin-top: 32px;

      ::v-deep {
        > ul {
          margin: 0;
        }
      }
    }

    .button-list {
      position: relative;
      margin: 30px 0 0;
    }
  }
}
</style>
