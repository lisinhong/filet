<template>
  <div class="transaction-history">
    <p v-if="isEmpty">No data</p>
    <ul v-else>
      <li v-for="(transaction, index) in userTransactionHistory" :key="index">
        <span class="type">{{ transaction.transactionType }}</span>
        <div class="record">
          <span class="amount">
            {{ transaction.side }}
            <em>{{
              numeral(transaction.amount).format("0,0.00", Math.floor)
            }}</em>
            USDT
            <span v-if="transaction.from">from {{ transaction.from }}</span>
          </span>
          <span class="time">{{
            dayjs(transaction.time).format("ddd, MMM D, YYYY, hh:mm:ss A")
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import numeral from "numeral";
import dayjs from "dayjs";

dayjs.locale("es");

export default {
  name: "TransactionHistory",
  props: {
    isEmpty: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["userTransactionHistory"]),
  },
  methods: {
    numeral,
    dayjs,
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

  .time {
    flex: 0 0 230px;
    text-align: right;
  }

  @media screen and (max-width: 480px) {
    .record {
      margin-top: 8px;
      flex-direction: column;
    }

    .amount {
      margin-bottom: 24px;
    }

    .time {
      flex: 0 0 auto;
    }
  }
}
</style>
