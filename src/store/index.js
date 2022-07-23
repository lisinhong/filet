import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import $router from "@/router";

Vue.use(Vuex);

const $axios = axios.create({
  // baseURL: "https://thiv1xxsjc.execute-api.ap-southeast-1.amazonaws.com/prod",
  baseURL: "https://zcn81lw3lh.execute-api.ap-southeast-1.amazonaws.com/prod",
  timeout: 10000,
});

$axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.status >= 500) {
      $router.push("error");
    } else if (error?.response?.status === 401) {
      $router.push("login");
    }
    return Promise.reject(error);
  }
);

export default new Vuex.Store({
  state: {
    showSidebar: true,
    token: null,
    userInfo: {
      firstName: null,
      lastName: null,
      mobile: null,
      email: null,
      myReferral: null,
      referralFrom: null,
      wallet: null,
      createTime: null,
    },
    userAsset: {
      cash: null,
      interest: null,
    },
    userWalletInfo: {
      wallet: null,
      amount: null,
    },
    userFixedInterestRate: {
      id: null,
      name: null,
      rates: null,
      interest: null,
      remainDay: null,
    },
    userTransactionHistory: [],
    productIdList: [],
    productList: [],
    modal: {
      show: false,
      type: null,
      max: null,
    },
    alert: {
      show: false,
      success: false,
      text: null,
    },
    tvl: {
      deposit: null,
      interest: null,
    },
    tvlHistory: [],
    faq: [],
  },
  getters: {
    isLogin(state) {
      return !!state.token;
    },
    userName(state) {
      const {
        userInfo: { firstName, lastName },
      } = state;

      if (!firstName && !lastName) {
        return "";
      }
      return `${state.userInfo.firstName} ${state.userInfo.lastName}`;
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
    showAppModal(state, data) {
      const { type, max } = data;

      if (!type) {
        return;
      }

      state.modal = {
        show: true,
        type,
        max,
      };
    },
    hideAppModal(state) {
      state.modal = {
        show: false,
        type: null,
        max: null,
      };
    },
    setToken(state, token) {
      state.token = token;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setUserAsset(state, data) {
      state.userAsset = data;
    },
    setUserTransactionHistory(state, data) {
      state.userTransactionHistory = data;
    },
    setTVL(state, data) {
      state.tvl = data;
    },
    setProductIdList(state, data) {
      state.productIdList = data;
    },
    setProductList(state, data) {
      state.productList = data;
    },
    setTVLHistory(state, data) {
      state.tvlHistory = data;
    },
    setUserWalletInfo(state, data) {
      state.userWalletInfo = data;
    },
    setUserFixedInterestRate(state, data) {
      state.userFixedInterestRate = data;
    },
    setFaq(state, data) {
      state.faq = data;
    },
    showAlert(state, data) {
      state.alert = {
        show: true,
        variant: data.variant,
        text: data.text,
      };
    },
    hideAlert(state) {
      state.alert = {
        show: false,
        variant: null,
        text: null,
      };
    },
    resetUser(state) {
      state.token = null;
      state.userInfo = {
        firstName: null,
        lastName: null,
        mobile: null,
        email: null,
        myReferral: null,
        referralFrom: null,
        wallet: null,
        createTime: null,
      };
      state.userAsset = {
        cash: null,
        interest: null,
      };
      state.userWalletInfo = {
        wallet: null,
        amount: null,
      };
      state.userFixedInterestRate = {
        id: null,
        name: null,
        rates: null,
        interest: null,
        remainDay: null,
      };
      state.userTransactionHistory = [];
    },
  },
  actions: {
    login(context, data) {
      return $axios.post("user/login", data);
    },
    logout(context, data) {
      return $axios.post("user/logout", data);
    },
    verifyEmail(context, data) {
      return $axios.post("verify/email", data);
    },
    verifyOTP(context, data) {
      return $axios.post("verify/otp", data);
    },
    register(context, data) {
      return $axios.post("user/create", data);
    },
    getUserInfo(context, data) {
      return $axios.post("user/info", data);
    },
    updateUserInfo(context, data) {
      return $axios.post("user/update", data);
    },
    getUserAsset(context, data) {
      return $axios.post("user/asset", data);
    },
    getUserTransactionHistory(context, data) {
      return $axios.post("user/txnhistory", data);
    },
    getTVL() {
      return $axios.post("tvl");
    },
    getTVLHistory() {
      return $axios.post("tvl/history");
    },
    getProductIdList() {
      return $axios.post("product/list");
    },
    getProduct(context, data) {
      return $axios.post("product/detail", data);
    },
    apply(context, data) {
      return $axios.post("operation/apply", data);
    },
    deposit(context, data) {
      return $axios.post("operation/deposit", data);
    },
    withdraw(context, data) {
      return $axios.post("operation/withdraw", data);
    },
    redeem(context, data) {
      return $axios.post("operation/redeem", data);
    },
    contact(context, data) {
      return $axios.post("contact", data);
    },
    sendRecoverLink(context, data) {
      return $axios.post("recover", data);
    },
    getUserWalletInfo(context, data) {
      return $axios.post("user/walletinfo", data);
    },
    getUserFixedInterestRate(context, data) {
      return $axios.post("user/fixedinterest", data);
    },
    getFaq(context, data) {
      return $axios.post("faq", data);
    },
    changePassword(context, data) {
      return $axios.post("changepassword", data);
    },
  },
  modules: {},
});
