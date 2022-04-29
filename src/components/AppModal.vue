<template>
  <b-modal
    :visible="showModal"
    body-class="app-modal"
    hide-header
    hide-header-close
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
  >
    <div class="header">
      <span class="title">{{ modalTitle }}</span>
      <i @click="hideAppModal"><icon-close /></i>
    </div>
    <div class="content">
      <b-form-group label-for="modal-input" class="mb-0" label="Amount">
        <b-form-input
          id="modal-input"
          type="number"
          v-model="value"
          :placeholder="modalPlaceholder"
          :min="0"
          :state="inputState"
        ></b-form-input>
        <span class="description" v-if="showDescription">
          Max:
          <em @click="assignValue(modalMax)">{{ modalMax }}</em>
          USDT</span
        >
      </b-form-group>
    </div>
    <div class="footer">
      <button class="btn-confirm" :disabled="isConfirmDisabled">Confirm</button>
      <button class="btn-cancel" @click="hideAppModal">Cancel</button>
    </div>
  </b-modal>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import IconClose from "@/components/icons/IconClose.vue";

export default {
  name: "AppModal",
  components: {
    IconClose,
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    ...mapState(["showModal", "modalTitle", "modalPlaceholder", "modalMax"]),
    showDescription() {
      return this.modalMax > 0;
    },
    isConfirmDisabled() {
      if (this.modalMax > 0) {
        return this.value <= 0 || this.value > this.modalMax;
      }
      return this.value <= 0;
    },
    inputState() {
      if ((this.modalMax > 0 && this.value > this.modalMax) || this.value < 0) {
        return false;
      }
      return null;
    },
  },
  methods: {
    ...mapMutations(["hideAppModal"]),
    assignValue(value) {
      this.value = value;
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
