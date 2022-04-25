<template>
  <div class="line-chart">
    <line-chart-base
      :width="width"
      :height="height"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
  </div>
</template>

<script>
import LineChartBase from "@/components/charts/LineChartBase.vue";

export default {
  components: {
    LineChartBase,
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
      default: null,
    },
    height: {
      type: Number,
      default: 212,
    },
  },
};
</script>
