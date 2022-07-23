<template>
  <div class="app-my-page app-card-list">
    <div class="app-card">
      <p class="title">My Value</p>
      <p class="sub-title">
        {{ numeral(userAsset.totalAsset).format("0,0.00", Math.floor) }} USDT
      </p>
      <div class="chart">
        <doughnut-chart
          :chartData="doughnutChartData"
          :chartOptions="doughnutChartOptions"
          :is-empty="!hasAsset"
          enableActions
        />
      </div>
    </div>
    <div class="app-card">
      <p class="title">
        <span class="dot"></span>
        Fixed Interest
      </p>
      <div class="content">
        <product-info
          v-if="product"
          :product="product"
          :redeem="hasUserProductInfo"
          :apply="hasUserProductInfo"
        />
      </div>
    </div>
    <div class="app-card large">
      <p class="title">Transaction History</p>
      <div class="content">
        <transaction-history :isEmpty="isTransactionHistoryEmpty" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import numeral from "numeral";
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
      hasUserProductInfo: false,
    };
  },
  computed: {
    ...mapState([
      "userAsset",
      "token",
      "userTransactionHistory",
      "productIdList",
      "productList",
    ]),
    ...mapGetters(["isLogin"]),
    product() {
      return this.productList.find(
        (product) => product.name === "Fixed Interest"
      );
    },
    hasAsset() {
      return this.userAsset.totalAsset > 0;
    },
    doughnutChartData() {
      let labels;
      let data;
      let backgroundColor;

      if (this.hasAsset) {
        labels = ["Deposit", "Fixed Interest"];
        data = [this.userAsset.cash, this.userAsset.interest];
        backgroundColor = ["#A81B15", "#EDC612"];
      } else {
        labels = ["Deposit", "Fixed Interest", ""];
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
    isTransactionHistoryEmpty() {
      return !this.userTransactionHistory.length;
    },
  },
  async created() {
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

    if (!this.isLogin) {
      return;
    }
    this.getUserAsset({
      token: this.token,
    }).then((response) => {
      this.setUserAsset(response.data);
    });

    this.getUserWalletInfo({
      token: this.token,
    }).then((response) => this.setUserWalletInfo(response.data));

    this.getUserFixedInterestRate({
      token: this.token,
    })
      .then((response) => {
        this.setUserFixedInterestRate(response.data);
        this.hasUserProductInfo = true;
      })
      .catch(() => {
        this.hasUserProductInfo = false;
      });

    this.getUserTransactionHistory({
      token: this.token,
    }).then((response) => this.setUserTransactionHistory(response.data));
  },
  methods: {
    ...mapMutations([
      "setUserAsset",
      "setUserWalletInfo",
      "setUserFixedInterestRate",
      "setUserTransactionHistory",
      "setProductIdList",
      "setProductList",
    ]),
    ...mapActions([
      "getUserAsset",
      "getUserTransactionHistory",
      "getUserWalletInfo",
      "getUserFixedInterestRate",
      "getProductIdList",
      "getProduct",
      "getUserTransactionHistory",
    ]),
    numeral,
  },
};
</script>
