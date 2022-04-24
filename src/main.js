import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
ChartJS.register(
  Legend,
  LinearScale,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
