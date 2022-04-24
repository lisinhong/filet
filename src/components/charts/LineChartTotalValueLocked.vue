<template>
  <div class="line-chart-total-value-locked">
    <line-chart
      :width="width"
      :height="height"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart.vue";

export default {
  components: {
    LineChart,
  },
  props: {
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: 212,
    },
  },
  data() {
    return {
      chartData: {
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
      chartOptions: {
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

<style lang="scss" scoped>
.line-chart-total-value-locked {
}
</style>
