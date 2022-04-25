<script>
import { Doughnut } from "vue-chartjs/legacy";

export default {
  extends: Doughnut,
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
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
