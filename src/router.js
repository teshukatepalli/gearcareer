import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Homepage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./components/signup.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/About.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("./components/JobPage.vue"),
    },
    {
      path: "/job-details",
      name: "job-details",
      component: () => import("./components/JobDetails.vue"),
    },
  ],
});
