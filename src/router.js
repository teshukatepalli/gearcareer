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
      path: "/",
      name: "profile",
      component: () => import("./components/profile/profile.vue"),
      children: [
        {
          path: "/myresume",
          name: "myresume",
          component: () => import("./components/profile/MyResume.vue"),
        },
        {
          path: "/my-company",
          name: "my-company",
          component: () => import("./components/profile/company.vue"),
        },
        {
          path: "/manage-jobs",
          name: "manage-jobs",
          component: () => import("./components/profile/ManageJobs.vue"),
        },
        {
          path: "/bookmarked",
          name: "bookmarked",
          component: () => import("./components/profile/BookmarkedJobs.vue"),
        },
        {
          path: "/notifications",
          name: "notifications",
          component: () => import("./components/profile/Notifications.vue"),
        },
        {
          path: "/manage-applications",
          name: "manage-applications",
          component: () =>
            import("./components/profile/ManageApplications.vue"),
        },
        {
          path: "/job-alerts",
          name: "job-alerts",
          component: () => import("./components/profile/JobAlerts.vue"),
        },
        {
          path: "/change-password",
          name: "change-password",
          component: () => import("./components/profile/ChangePassword.vue"),
        },
      ],
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
    {
      path: "/postjob",
      name: "postjob",
      component: () => import("./components/PostJob.vue"),
    },
    {
      path: "/browseresumes",
      name: "browseresumes",
      component: () => import("./components/profile/BrowseResumes.vue"),
    },
    {
      path: "/addresume",
      name: "addresume",
      component: () => import("./components/profile/AddResume.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("./components/PrivacyPolicy.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("./components/Faq.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./components/Contact.vue"),
    },
  ],
});
