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
    token: "",
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
    async verifyEmail(data) {
      try {
        await $axios.post("verify/email", data);
      } catch (error) {
        console.error(error);
      }
    },
    async verifyOTP(data) {
      try {
        await $axios.post("verify/otp", data);
      } catch (error) {
        console.error(error);
      }
    },
    async register(data) {
      try {
        await $axios.post("user/create", data);
      } catch (error) {
        console.error(error);
      }
    },
    getUserInfo(context, data) {
      return $axios.post("user/info", data);
    },
    async getUserAsset({ commit }, data) {
      try {
        const response = await $axios.post("user/asset", data);

        commit("setUserAsset", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getTVL({ commit }) {
      try {
        const response = await $axios.post("tvl");

        commit("setTVL", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getTVLHistory({ commit }) {
      try {
        const response = await $axios.post("tvl/history");

        commit("setTVLHistory", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getProductList({ commit }) {
      try {
        const response = await $axios.post("product/list");

        commit("setProductList", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getProduct({ commit }, data) {
      try {
        const response = await $axios.post("product/detail", data);

        commit("setProduct", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async apply(data) {
      try {
        await $axios.post("apply", data);
      } catch (error) {
        console.error(error);
      }
    },
    async deposit(data) {
      try {
        await $axios.post("deposit", data);
      } catch (error) {
        console.error(error);
      }
    },
    async withdraw(data) {
      try {
        await $axios.post("withdraw", data);
      } catch (error) {
        console.error(error);
      }
    },
    async redeem(data) {
      try {
        await $axios.post("redeem", data);
      } catch (error) {
        console.error(error);
      }
    },
    async contact(data) {
      try {
        await $axios.post("contact", data);
      } catch (error) {
        console.error(error);
      }
    },
    async recoverPassword(code) {
      try {
        await $axios.post(`recover/${code}`);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
