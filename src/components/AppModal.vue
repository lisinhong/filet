<template>
  <b-modal
    :visible="modal.show"
    body-class="app-modal"
    hide-header
    hide-header-close
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
  >
    <div class="header">
      <span class="title">{{ title }}</span>
      <i @click="hideAppModal"><icon-close /></i>
    </div>
    <div class="content">
      <b-form-group label-for="amount" label="Amount">
        <b-form-input
          id="amount"
          type="number"
          v-model="amount"
          placeholder="0"
          :min="0"
          :state="inputState"
        ></b-form-input>
        <span class="description" v-if="showDescription">
          Max:
          <em @click="assignValue(modal.max)">{{ modal.max }}</em>
          USDT
        </span>
      </b-form-group>
      <b-form-group label-for="from" label="From">
        <b-form-input
          id="from"
          type="text"
          v-model="from"
          placeholder="Wallet"
          :state="inputState"
        ></b-form-input>
      </b-form-group>
      <b-form-group label-for="to" label="To">
        <b-form-input
          id="to"
          type="text"
          v-model="to"
          placeholder="Wallet"
          :state="inputState"
        ></b-form-input>
      </b-form-group>
    </div>
    <div class="footer">
      <button
        class="btn-confirm"
        :disabled="isConfirmDisabled"
        @click="handleConfirmClick"
      >
        Confirm
      </button>
      <button class="btn-cancel" @click="hideAppModal">Cancel</button>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import IconClose from "@/components/icons/IconClose.vue";

export default {
  name: "AppModal",
  components: {
    IconClose,
  },
  data() {
    return {
      amount: null,
      from: null,
      to: null,
      inputState: null,
    };
  },
  computed: {
    ...mapState(["modal"]),
    title() {
      switch (this.modal.type) {
        case "apply":
          return "Apply";
        case "redeem":
          return "Early Redemption";
        case "deposit":
          return "Deposit";
        case "withdraw":
          return "Withdraw";
        default:
          return "";
      }
    },
    showDescription() {
      return this.modal.max >= 0;
    },
    isConfirmDisabled() {
      if (this.modal.max > 0) {
        return (
          this.amount <= 0 ||
          this.amount > this.modal.max ||
          !this.from ||
          !this.to
        );
      }
      return this.amount <= 0 || !this.from || !this.to;
    },
  },
  methods: {
    ...mapMutations(["hideAppModal"]),
    ...mapActions(["apply"]),
    assignValue(value) {
      this.amount = value;
    },
    async handleConfirmClick() {
      try {
        switch (this.modal.type) {
          case "apply":
            break;
          case "redeem":
            break;
          case "deposit":
            break;
          case "withdraw":
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .app-modal {
    padding: 24px 32px;
    min-height: 284px;
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.02em;
        color: $black;
      }

      i {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    .content {
      margin: 48px 0 24px;

      label {
        margin-bottom: 8px;

        & + div {
          position: relative;

          &::after {
            content: "USDT";
            display: block;
            position: absolute;
            top: 13px;
            right: 16px;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.02em;
            color: $brand-dark;
          }
        }
      }

      input {
        padding: 13px 68px 13px 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: $brand-dark;

        &::placeholder {
          color: $gray-5;
        }

        &.is-invalid {
          background: none;
        }
      }
    }

    .form-group {
      & + .form-group {
        margin-top: 8px;
      }
    }

    .description {
      display: inline-block;
      width: 100%;
      text-align: right;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: $gray-2;

      em {
        text-decoration: underline;
        color: $primary-dark-1;
        cursor: pointer;
        font-style: normal;
      }
    }

    .footer {
      margin-top: 24px;
      display: flex;
      flex-direction: row-reverse;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 94px;
        height: 32px;
        border-radius: 22px;
        border: 1px solid $brand-dark;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
      }

      .btn-confirm {
        margin-left: 12px;
        color: $white;
        background-color: $brand-dark;

        &:disabled {
          background-color: $gray-8;
          border-color: $gray-8;
          color: $gray-6;
          cursor: not-allowed;
        }
      }

      .btn-cancel {
        color: $brand-dark;
        background-color: $white;
      }
    }
  }
}
</style>
