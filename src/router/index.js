import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    meta: {
      showAppInfo: true,
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppDashboard.vue"),
  },
  {
    path: "/my-page",
    name: "My Page",
    meta: {
      showAppInfo: true,
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppMyPage.vue"),
  },
  {
    path: "/products",
    name: "Products",
    meta: {
      showAppInfo: true,
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppProducts.vue"),
  },
  {
    path: "/faq",
    name: "Faq",
    meta: {
      showAppInfo: true,
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppFaq.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      showAppHeader: true,
    },
    component: () => import("@/views/AppContact.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      showAppInfo: true,
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppProfile.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    meta: {
      showAppInfo: true,
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppSettings.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/AppLogin.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/AppRegister.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/AppForgotPassword.vue"),
  },
  {
    path: "/error",
    name: "Error",
    meta: {
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppError.vue"),
  },
  {
    path: "*",
    name: "Not Found",
    meta: {
      showAppHeader: true,
      showAppSidebar: true,
    },
    component: () => import("@/views/AppNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
