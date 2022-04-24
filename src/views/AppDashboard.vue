<template>
  <div class="app-dashboard">
    <div class="app-card">
      <p class="title">Total Value Locked</p>
      <p class="sub-title">17,915,056,819 USDT</p>
      <div class="chart">
        <doughnut-chart-total-value-locked />
      </div>
    </div>
    <div class="app-card">
      <p class="title">
        <span class="dot"></span>
        Fixed Interest
      </p>
      <div class="content">
        <div class="info">
          <div class="rate">8%</div>
          <div class="description">
            <p>Period <em>30</em> Days</p>
            <p>Minimum: <em>3,000</em> USDT</p>
          </div>
        </div>
        <router-link class="btn-more" to="products">
          <button>More</button>
        </router-link>
      </div>
    </div>
    <div class="app-card large">
      <p class="title">Total Value Locked</p>
      <div class="chart">
        <line-chart-total-value-locked />
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChartTotalValueLocked from "@/components/charts/DoughnutChartTotalValueLocked.vue";
import LineChartTotalValueLocked from "@/components/charts/LineChartTotalValueLocked.vue";

export default {
  name: "AppDashboard",
  components: {
    DoughnutChartTotalValueLocked,
    LineChartTotalValueLocked,
  },
};
</script>

<style lang="scss" scoped>
.app-dashboard {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 32px 24px;

  .app-card {
    flex: 1 1 auto;
    width: 40%;
    height: 320px;
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    border-radius: 4px;
    background-color: $white;
    box-shadow: 0 0 20px rgba($black, 0.1);

    &.large {
      width: 100%;
    }

    .title {
      margin: 0 0 12px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: 0.02em;
      color: $black;

      .dot {
        margin-right: 12px;
        display: block;
        width: 12px;
        height: 12px;
        background-color: $graphy-1;
        border-radius: 50%;
      }
    }

    .sub-title {
      margin: 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: $brand-dark;
    }

    .chart {
      margin-top: auto;
    }

    .content {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;

      .info {
        margin-top: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .rate {
        margin-right: 30px;
        font-weight: 700;
        font-size: 128px;
        line-height: 150px;
        text-align: center;
        letter-spacing: 0.02em;
        color: $graphy-1;
      }

      .description {
        > p {
          margin: 0;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.02em;
          color: $gray-2;

          & + p {
            margin-top: 16px;
          }

          > em {
            color: $brand-dark;
            font-style: normal;
          }
        }
      }

      .btn-more {
        margin: auto 0 0 auto;
        text-decoration: none;

        > button {
          padding: 8px 24px;
          background: $brand-dark;
          border-radius: 22px;
          border: none;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          letter-spacing: 0.02em;
          color: $white;
        }
      }
    }
  }
}
</style>
