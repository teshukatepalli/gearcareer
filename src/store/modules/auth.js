import { API } from "@/api";
import router from "../../router";
import {
  storeAuthData,
  removeAuthData,
  authHeader,
} from "../../services/Auther";

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
    let { data } = await API.Authentication.signup(payload);
    context.commit("updateProfileInfo", data.user);
    await storeAuthData(data.token);
    router.push("/");
  },
  async login(context, payload) {
    let { data } = await API.Authentication.login(payload);
    await storeAuthData(data.token);
    context.commit("updateProfileInfo", data.user);
    router.push("/");
  },
  async logout(context) {
    await removeAuthData();
    context.commit("removeProfileInfo", "{}");
    router.currentRoute.path !== "/" ? router.push("/") : "";
  },

  async user(context) {
    if (authHeader()) {
      let { data } = await API.Authentication.user();
      context.commit("updateProfileInfo", data);
    }
    // router.push("/");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
