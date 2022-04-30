<template>
  <div class="app-my-page app-card-list">
    <div class="app-card">
      <p class="title">Total Asset</p>
      <p class="sub-title">{{ totalAsset }} USDT</p>
      <div class="chart">
        <doughnut-chart
          :chartData="doughnutChartData"
          :chartOptions="doughnutChartOptions"
          :is-empty="!hasAsset"
        />
      </div>
    </div>
    <div class="app-card">
      <p class="title">
        <span class="dot"></span>
        Fixed Interest
      </p>
      <div class="content">
        <product-info redeem />
      </div>
    </div>
    <div class="app-card large">
      <p class="title">Transaction History</p>
      <div class="content">
        <transaction-history :isEmpty="!transactionHistory" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import DoughnutChart from "@/components/charts/DoughnutChart.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import TransactionHistory from "@/components/TransactionHistory.vue";

export default {
  name: "AppMyPage",
  components: {
    DoughnutChart,
    ProductInfo,
    TransactionHistory,
  },
  data() {
    return {
      transactionHistory: true,
    };
  },
  computed: {
    ...mapState(["userAsset", "token"]),
    ...mapGetters(["isLogin"]),
    hasAsset() {
      return this.totalAsset > 0;
    },
    totalAsset() {
      return Number(this.userAsset.cash) + Number(this.userAsset.interest);
    },
    doughnutChartData() {
      let labels;
      let data;
      let backgroundColor;

      if (this.hasAsset) {
        labels = ["Cash Back", "Fixed Interest"];
        data = [this.userAsset.cash, this.userAsset.interest];
        backgroundColor = ["#A81B15", "#EDC612"];
      } else {
        labels = ["Cash Back", "Fixed Interest", ""];
        data = [0, 0, 100];
        backgroundColor = ["#F5F7F7", "#F5F7F7", "#F5F7F7"];
      }

      return {
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderWidth: 0,
            cutout: "80%",
          },
        ],
      };
    },
    doughnutChartOptions() {
      let fontColor;

      if (this.hasAsset) {
        fontColor = "#292B2B";
      } else {
        fontColor = "rgba(41, 43, 43, 0.32)";
      }

      return {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            fontColor,
          },
          tooltip: {
            enabled: false,
          },
        },
      };
    },
  },
  created() {
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
    ...mapMutations(["setUserAsset"]),
    ...mapActions(["getUserAsset", "getUserTransactionHistory"]),
  },
};
</script>
