<template>
  <div class="app-dashboard app-card-list">
    <div class="app-card">
      <p class="title">Total Value Locked</p>
      <p class="sub-title">17,915,056,819 USDT</p>
      <div class="chart">
        <doughnut-chart
          :chartData="doughnutChartData"
          :chartOptions="doughnutChartOptions"
        />
      </div>
    </div>
    <div class="app-card">
      <p class="title">
        <span class="dot"></span>
        Fixed Interest
      </p>
      <div class="content">
        <product-info />
      </div>
    </div>
    <div class="app-card large">
      <p class="title">Total Value Locked</p>
      <div class="chart">
        <line-chart
          :chartData="lineChartData"
          :chartOptions="lineChartOptions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DoughnutChart from "@/components/charts/DoughnutChart.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import LineChart from "@/components/charts/LineChart.vue";

export default {
  name: "AppDashboard",
  components: {
    DoughnutChart,
    ProductInfo,
    LineChart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["tvl", "product", "tvlHistory"]),
    doughnutChartData() {
      return {
        labels: ["Total Deposit", "Fixed Interest"],
        datasets: [
          {
            data: [this.tvl.deposit, this.tvl.interest],
            backgroundColor: ["#A81B15", "#EDC612"],
            borderWidth: 0,
            cutout: "80%",
          },
        ],
      };
    },
    doughnutChartOptions() {
      return {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      };
    },
    lineChartLabelList() {
      return this.tvlHistory.map((tvl) => tvl.date);
    },
    lineChartDataList() {
      return this.tvlHistory.map((tvl) => tvl.price);
    },
    lineChartData() {
      return {
        labels: this.lineChartLabelList,
        datasets: [
          {
            data: this.lineChartDataList,
            fill: false,
            borderWidth: 2,
            borderColor: "#4312ED",
            tension: 0.4,
          },
        ],
      };
    },
    lineChartOptions() {
      return {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      };
    },
  },
  created() {
    this.getTVL();
    this.getProduct({ id: 0 });
    this.getTVLHistory();
  },
  methods: {
    ...mapActions(["getTVL", "getTVLHistory", "getProduct"]),
  },
};
</script>
