import Vue from "vue";
import Vuex from "vuex";

// import tenant from "./modules/tenant";
import auth from "./modules/auth";
// import campaign from "./modules/campaign";
// import retailers from "./modules/retailers";
// import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // tenant,
    auth,
    // campaign,
    // retailers,
    // user,
  },
});
