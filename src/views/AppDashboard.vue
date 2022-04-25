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
    return {
      doughnutChartData: {
        labels: ["Total Deposit", "Fixed Interest"],
        datasets: [
          {
            data: [40, 20],
            backgroundColor: ["#A81B15", "#EDC612"],
            borderWidth: 0,
            cutout: "80%",
          },
        ],
      },
      doughnutChartOptions: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
      lineChartData: {
        labels: [
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
          "a",
        ],
        datasets: [
          {
            data: [
              33, 411, 543, 1231, 443, 812, 376, 656, 1657, 776, 3554, 7324,
              3325, 8345, 3234, 2123,
            ],
            fill: false,
            borderWidth: 2,
            borderColor: "#4312ED",
            tension: 0.4,
          },
        ],
      },
      lineChartOptions: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
