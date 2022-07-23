<template>
  <div class="app-dashboard app-card-list">
    <div class="app-card">
      <p class="title">Total Value Locked</p>
      <p class="sub-title">
        {{ numeral(tvl.totalAmount).format("0,0.00", Math.floor) }} USDT
      </p>
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
        <product-info v-if="product" :product="product" />
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
import { mapActions, mapState, mapMutations } from "vuex";
import numeral from "numeral";
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
  computed: {
    ...mapState(["tvl", "tvlHistory", "token", "productIdList", "productList"]),
    product() {
      return this.productList.find(
        (product) => product.name === "Fixed Interest"
      );
    },
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
      return this.tvlHistory.map((tvl) => tvl.date).reverse();
    },
    lineChartDataList() {
      return this.tvlHistory.map((tvl) => tvl.price).reverse();
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
          tooltip: {
            callbacks: {
              title(item) {
                return item[0].label;
              },
              label(item) {
                return numeral(item.raw).format("0,0.00");
              },
            },
          },
        },
      };
    },
  },
  async created() {
    this.getTVL().then((response) => this.setTVL(response.data));
    this.getTVLHistory().then((response) => this.setTVLHistory(response.data));

    const productList = [];
    const { data } = await this.getProductIdList();
    const productIdList = data.map((item) => item.id);

    this.setProductIdList(productIdList);

    for (let i = 0; i < productIdList.length; i++) {
      const id = productIdList[i];
      const { data } = await this.getProduct({ id });

      productList.push(data);
    }
    this.setProductList(productList);
  },
  methods: {
    ...mapActions([
      "getTVL",
      "getTVLHistory",
      "getProduct",
      "getProductIdList",
    ]),
    ...mapMutations([
      "setTVL",
      "setTVLHistory",
      "setProductIdList",
      "setProductList",
    ]),
    numeral,
  },
};
</script>
