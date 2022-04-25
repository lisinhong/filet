<template>
  <div class="app-my-page app-card-list">
    <div class="app-card">
      <p class="title">Total Asset</p>
      <p class="sub-title">17,915,056,819 USDT</p>
      <div class="chart">
        <doughnut-chart
          :chartData="doughnutChartData"
          :chartOptions="doughnutChartOptions"
          :is-empty="!totalAsset"
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
import { mapState, mapMutations } from "vuex";
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
      totalAsset: [65000, 36000],
      transactionHistory: true,
    };
  },
  computed: {
    ...mapState(["showModal"]),
    doughnutChartData() {
      let labels;
      let data;
      let backgroundColor;

      if (this.totalAsset) {
        labels = ["Cash Back", "Fixed Interest"];
        data = this.totalAsset;
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

      if (this.totalAsset) {
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
  methods: {
    ...mapMutations(["showAppModal"]),
  },
};
</script>
