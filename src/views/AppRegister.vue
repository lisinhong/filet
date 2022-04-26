<template>
  <div class="app-register">
    <div class="account">
      <div class="account-header">
        <div class="company">
          <i><icon-polygon /></i>
          <span>Filet</span>
        </div>
        <router-link to="/">Home</router-link>
      </div>
      <div class="account-card">
        <div class="account-greeting"></div>
        <b-form-group label-for="phone-number" label="Phone number (Optional)">
          <b-form-input
            id="phone-number"
            type="tel"
            v-model="phoneNumber"
            placeholder="+1 123456789"
          ></b-form-input>
        </b-form-group>
      </div>
      <div class="account-footer">
        <a href="#">Privacy Policy</a>
        <a href="#">User Notice</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRegister",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-register {
  width: 100%;
  height: 100%;
}
</style>
