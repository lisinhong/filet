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
      <b-form-group
        v-if="modal.type !== 'redeem'"
        label-for="amount"
        label="Amount"
      >
        <b-form-input
          id="amount"
          type="number"
          v-model.number="amount"
          placeholder="0"
          :min="0"
          :state="inputState"
          :formatter="amountFormatter"
        ></b-form-input>
        <span class="description" v-if="showMaxDescription">
          Max:
          <em @click="assignValue(modal.max)">{{
            numeral(modal.max).format("0,0.00", Math.floor)
          }}</em>
          USDT
        </span>
      </b-form-group>
      <p v-else>
        You are going to redeem your fixed interest. The redemption will be on
        the 7th of the following month and you will no longer be able to receive
        your interest. Are you sure you want to do this?
      </p>
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
import numeral from "numeral";
import IconClose from "@/components/icons/IconClose.vue";

export default {
  name: "AppModal",
  components: {
    IconClose,
  },
  data() {
    return {
      amount: null,
      inputState: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["modal", "token"]),
    title() {
      switch (this.modal.type) {
        case "apply":
          return "Apply";
        case "redeem":
          return "Redemption";
        case "deposit":
          return "Deposit";
        case "withdraw":
          return "Withdraw";
        default:
          return "";
      }
    },
    showMaxDescription() {
      return this.modal.max >= 0;
    },
    isConfirmDisabled() {
      if (this.modal.type === "redeem") {
        return this.isLoading;
      }
      if (this.modal.max > 0) {
        return (
          this.amount <= 0 || this.amount > this.modal.max || this.isLoading
        );
      }
      return this.amount <= 0 || this.isLoading;
    },
  },
  watch: {
    "modal.show"() {
      this.amount = null;
    },
  },
  methods: {
    ...mapMutations([
      "hideAppModal",
      "setUserAsset",
      "showAlert",
      "hideAlert",
      "setUserTransactionHistory",
    ]),
    ...mapActions([
      "apply",
      "deposit",
      "withdraw",
      "redeem",
      "getUserAsset",
      "getUserTransactionHistory",
    ]),
    numeral,
    amountFormatter(inputAmount) {
      return numeral(numeral(inputAmount).format("0,0.00", Math.floor)).value();
    },
    assignValue(value) {
      this.amount = Math.floor(Number(value) * 100) / 100;
    },
    handleSuccess() {
      this.isLoading = false;
      this.hideAppModal();
      this.showAlert({
        variant: "success",
        text: "Operate successfully.",
      });

      this.getUserAsset({
        token: this.token,
      }).then((response) => this.setUserAsset(response.data));

      setTimeout(() => {
        this.hideAlert();
      }, 3000);
    },
    async handleConfirmClick() {
      this.isLoading = true;

      try {
        switch (this.modal.type) {
          case "apply":
            await this.apply({
              token: this.token,
              productId: "0",
              amount: this.amount,
            });
            this.handleSuccess();
            this.$router.push("my-page");
            break;
          case "redeem":
            await this.redeem({
              token: this.token,
              productId: "0",
              isRedeem: true,
            });
            this.handleSuccess();
            break;
          case "deposit":
            await this.deposit({
              token: this.token,
              amount: this.amount,
            });
            this.handleSuccess();
            break;
          case "withdraw":
            await this.withdraw({
              token: this.token,
              amount: this.amount,
            });
            this.handleSuccess();
            break;
          default:
            break;
        }

        const response = await this.getUserTransactionHistory({
          token: this.token,
        });

        this.setUserTransactionHistory(response.data);
      } catch (error) {
        this.isLoading = false;
        this.showAlert({
          text: error?.response?.data?.message,
        });

        setTimeout(() => {
          this.hideAlert();
        }, 3000);
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

      p {
        color: $brand-dark;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.02em;
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
      margin-top: auto;
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
