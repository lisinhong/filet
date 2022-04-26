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
    token: "123",
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
    firstName: "Kelly", // TODO: remove
    lastName: "Anderson", // TODO: remove
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
      return `${state.firstName} ${state.lastName}`;
    },
  },
  mutations: {
    toggleSideBar(state) {
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
    async login({ commit }, data) {
      try {
        const response = await $axios.post("user/login", data);

        commit("setToken", response.data.token);
      } catch (error) {
        console.error(error);
      }
    },
    async logout(data) {
      try {
        await $axios.post("user/logout", data);
      } catch (error) {
        console.error(error);
      }
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
    async getUserInfo({ commit }, data) {
      try {
        const response = await $axios.post("user/info", data);

        commit("setUserInfo", response.data);
      } catch (error) {
        console.error(error);
      }
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
  },
  modules: {},
});
