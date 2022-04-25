import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppDashboard.vue"),
  },
  {
    path: "/my-page",
    name: "My Page",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppMyPage.vue"),
  },
  {
    path: "/products",
    name: "Products",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppProducts.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppFaq.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppContact.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppProfile.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    meta: {
      showAppInfo: true,
    },
    component: () => import("@/views/AppSettings.vue"),
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("@/views/AppError.vue"),
  },
  {
    path: "*",
    name: "Not Found",
    component: () => import("@/views/AppNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
