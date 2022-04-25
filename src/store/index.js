import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSidebar: true,
    token: "123",
    firstName: "Kelly",
    lastName: "Anderson",
    showModal: false,
    modalTitle: null,
    modalPlaceholder: null,
    modalDescription: null,
    modalMax: null,
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
  },
  actions: {},
  modules: {},
});
