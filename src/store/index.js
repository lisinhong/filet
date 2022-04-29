import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const $axios = axios.create({
  baseURL: "https://thiv1xxsjc.execute-api.ap-southeast-1.amazonaws.com/prod",
  timeout: 3000,
});

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
    productList: [],
    product: {
      name: null,
      rates: null,
      period: null,
      pfee: null,
      mfee: null,
      minimal: null,
      maximal: null,
      mdd: null,
      startDate: null,
    },
    showModal: false,
    modalTitle: null,
    modalPlaceholder: null,
    modalDescription: null,
    modalMax: null,
    tvl: {
      deposit: null,
      interest: null,
    },
    tvlHistory: [],
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
    totalAsset(state) {
      const { deposit, interest } = state.tvl;

      return Number(deposit) + Number(interest);
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
    showAppModal(state, data) {
      const { modalTitle, modalPlaceholder, modalMax } = data;

      if (!modalTitle || !modalPlaceholder) {
        console.error("missing data");
        return;
      }

      state.showModal = true;
      state.modalTitle = modalTitle;
      state.modalPlaceholder = modalPlaceholder;
      state.modalMax = modalMax ? modalMax : null;
    },
    hideAppModal(state) {
      state.showModal = false;
      state.modalTitle = null;
      state.modalPlaceholder = null;
      state.modalMax = null;
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
    setTVL(state, data) {
      state.tvl = data;
    },
    setProductList(state, data) {
      state.productList = data;
    },
    setProduct(state, data) {
      state.product = data;
    },
    setTVLHistory(state, data) {
      state.tvlHistory = data;
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
    getUserAsset(context, data) {
      return $axios.post("user/asset", data);
    },
    getTVL() {
      return $axios.post("tvl");
    },
    getTVLHistory() {
      return $axios.post("tvl/history");
    },
    getProductList() {
      return $axios.post("product/list");
    },
    getProduct(context, data) {
      return $axios.post("product/detail", data);
    },
    apply(context, data) {
      return $axios.post("apply", data);
    },
    deposit(context, data) {
      return $axios.post("deposit", data);
    },
    withdraw(context, data) {
      return $axios.post("withdraw", data);
    },
    redeem(context, data) {
      return $axios.post("redeem", data);
    },
    contact(context, data) {
      return $axios.post("contact", data);
    },
    recover(context, data) {
      return $axios.post("recover", data);
    },
  },
  modules: {},
});
