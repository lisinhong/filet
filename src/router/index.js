import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/views/AppDashboard.vue"),
  },
  {
    path: "my-page",
    name: "MyPage",
    component: () => import("@/views/AppMyPage.vue"),
  },
  {
    path: "products",
    name: "Products",
    component: () => import("@/views/AppProducts.vue"),
  },
  {
    path: "faq",
    name: "Faq",
    component: () => import("@/views/AppFaq.vue"),
  },
  {
    path: "contact",
    name: "Contact",
    component: () => import("@/views/AppContact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
