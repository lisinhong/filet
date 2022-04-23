import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSidebar: true,
    isLogin: false,
    userName: "USERNAME",
  },
  getters: {},
  mutations: {
    toggleSideBar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
  actions: {},
  modules: {},
});
