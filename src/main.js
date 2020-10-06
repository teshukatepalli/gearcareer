import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueRouter from "vue-router";
import "./theme/assets/css/bootstrap.min.css";
import "./theme/assets/css/line-icons.css";
import "./theme/assets/css/owl.theme.default.css";
import "./theme/assets/css/slicknav.min.css";
import "./theme/assets/css/animate.css";
import "./theme/assets/css/main.css";
import "./theme/assets/css/responsive.css";

// Vue.use(VueRouter);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
