<template>
  <div class="app-faq">
    <ul>
      <li v-b-toggle.collapse-1>
        <div class="faq-title">
          <span>Q1. Title goes here</span>
          <icon-arrow-down />
        </div>
        <b-collapse id="collapse-1">
          <div class="faq-description">
            Description goes here.Description goes here.Description goes
            here.Description goes here.Description goes here.Description goes
            Description goes here.Description goes here.Description goes
            here.Description goes here.Description goes here.Description goes
          </div>
        </b-collapse>
      </li>
      <li v-b-toggle.collapse-2>
        <div class="faq-title">
          <span>Q2. Title goes here</span>
          <icon-arrow-down />
        </div>
        <b-collapse id="collapse-2">
          <div class="faq-description">
            Description goes here.Description goes here.Description goes
            here.Description goes here.Description goes here.Description goes
            Description goes here.Description goes here.Description goes
            here.Description goes here.Description goes here.Description goes
          </div>
        </b-collapse>
      </li>
      <li v-b-toggle.collapse-3>
        <div class="faq-title">
          <span>Q3. Title goes here</span>
          <icon-arrow-down />
        </div>
        <b-collapse id="collapse-3">
          <div class="faq-description">
            Description goes here.Description goes here.Description goes
            here.Description goes here.Description goes here.Description goes
            Description goes here.Description goes here.Description goes
            here.Description goes here.Description goes here.Description goes
          </div>
        </b-collapse>
      </li>
    </ul>
  </div>
</template>

<script>
import IconArrowDown from "@/components/icons/IconArrowDown.vue";

export default {
  name: "AppFaq",
  components: {
    IconArrowDown,
  },
};
</script>

<style lang="scss" scoped>
.app-faq {
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

    svg {
      fill: #888888;
    }
  }

  .faq-description {
    padding: 24px 32px 0;
    font-size: 14px;
  }
}
</style>
