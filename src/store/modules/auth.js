import API from "../../api/services";
import router from "../../router";
import { storeAuthData, removeAuthData } from "../../services/Auther";

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
    console.log(data);
    storeAuthData(data.token);
    context.commit("updateProfileInfo", data.data.user);

    router.push("/");
  },
  async login(context, payload) {
    let { data } = await API.create("/users/login", payload);
    console.log(data);
    storeAuthData(data.token);
    context.commit("updateProfileInfo", data.data.user);
    router.push("/");
  },
  async update(context, payload) {
    console.log(`payload: ${payload}`);
    let { data } = await API.update("/users/updateMe", payload);
    context.commit("updateProfileInfo", data.data.user);
  },
  async user(context) {
    let { data } = await API.get("/users/me");
    await context.commit("updateProfileInfo", data.data.data);
  },
  async logout(context) {
    context.commit("removeProfileInfo", "{}");
    removeAuthData();
    router.currentRoute.path !== "/" ? router.push("/") : "";
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
