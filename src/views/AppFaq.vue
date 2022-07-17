<template>
  <div class="app-faq">
    <div class="loading" v-if="isLoading">
      <icon-loading />
    </div>
    <ul v-else>
      <li
        v-b-toggle="index.toString()"
        v-for="(item, index) in faq"
        :key="index"
      >
        <div class="faq-title">
          <span>{{ item.question }}</span>
          <icon-arrow-down />
        </div>
        <b-collapse :id="index.toString()">
          <div class="faq-description">
            {{ item.answer }}
          </div>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconLoading from "@/components/icons/IconLoading.vue";

export default {
  name: "AppFaq",
  components: {
    IconArrowDown,
    IconLoading,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(["faq"]),
  },
  created() {
    this.isLoading = true;
    this.getFaq()
      .then((response) => this.setFaq(response.data))
      .finally(() => {
        this.isLoading = false;
      });
  },
  methods: {
    ...mapActions(["getFaq"]),
    ...mapMutations(["setFaq"]),
  },
};
</script>

<style lang="scss" scoped>
@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate((360deg));
  }
}

.app-faq {
  width: 100%;
  height: 100%;

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      animation: loading-spin 2s linear infinite;
    }
  }

  ul {
    margin: 0;
    padding: 0 32px;
    background-color: $white;
    border-radius: 4px;
    list-style-type: none;
    box-shadow: 0 0 20px rgba($black, 0.1);

    li {
      padding: 24px 0;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: $brand-dark;
      &:not(:last-child) {
        border-bottom: 1px solid $gray-8;
      }
    }
  }

  .faq-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    word-break: break-all;

    svg {
      flex: 0 0 24px;
      margin-left: 12px;
      fill: #888888;
    }
  }

  .faq-description {
    padding: 24px 32px 0;
    font-size: 14px;
    word-break: break-all;
  }
}
</style>
