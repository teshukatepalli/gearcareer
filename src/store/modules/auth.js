import API from "../../api/services";
import router from "../../router";

const state = {
  profile: {},
  iSAuthenticated: false,
};

const mutations = {
  updateProfileInfo(state, data) {
    state.profile = data;
    state.iSAuthenticated = true;
  },
  removeProfileInfo(state, data) {
    state.profile = data;
    state.iSAuthenticated = false;
  },
};

const actions = {
  async signup(context, payload) {
    let { data } = await API.create("/users/signup", payload);
    context.commit("updateProfileInfo", data.data.user);
    router.push("/");
  },
  async login(context, payload) {
    let { data } = await API.create("/users/login", payload);
    context.commit("updateProfileInfo", data.data.user);
    router.push("/");
  },
  async logout(context) {
    context.commit("removeProfileInfo", "{}");
    router.currentRoute.path !== "/" ? router.push("/") : "";
  },

  async user(context) {
    let data = {};
    // let { data } = await API.Authentication.user();
    await context.commit("updateProfileInfo", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
