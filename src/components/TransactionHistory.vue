<template>
  <div class="transaction-history">
    <p v-if="isEmpty">No data</p>
    <ul v-else>
      <li>
        <span class="type">Variable Interest</span>
        <div class="record">
          <span class="amount">Sent <em>350,000.00</em> USDT</span>
          <span class="time">Thu, Mar 3, 2022, 22:03:20 AM</span>
        </div>
      </li>
      <li>
        <span class="type">Transfer</span>
        <div class="record">
          <span class="amount"
            >Sent <em>7,312,341,814.33</em> USDT from 0xra1dfghgrxm2z</span
          >
          <span class="time">Thu, Mar 2, 2022, 01:03:20 AM</span>
        </div>
      </li>
      <li>
        <span class="type">Transfer</span>
        <div class="record">
          <span class="amount"
            >Received <em>8,312,341,814.33</em> USDT from 0xra1dfghgrxm2z</span
          >
          <span class="time">Thu, Mar 1, 2022, 10:03:20 AM</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TransactionHistory",
  props: {
    isEmpty: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.transaction-history {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: $gray-2;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      padding: 0 0 16px 0;
      border-bottom: 1px solid $gray-5;
      margin-bottom: 16px;
    }
  }

  .record {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }

  .amount {
    color: $brand-dark;

    em {
      font-style: normal;
      font-weight: 500;
    }
  }
}
</style>
