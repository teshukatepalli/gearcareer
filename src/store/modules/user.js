import { API } from "@/api";

const state = {
  users: {},
  addedUser: {},
};
const mutations = {
  getUsersData(state, data) {
    state.users = data;
  },
  addedUserData(state, data) {
    state.addedUser = data;
  },
};
const actions = {
  async getUsers(context) {
    let { data } = await API.Users.getUsersInfo();
    context.commit("getUsersData", data.results);
  },
  async addUsers(context, content) {
    let { data } = await API.Users.addUser(content);
    context.commit("addedUserData", data);
  },
  async deleteUser(context, content) {
    let { data } = await API.Users.deleteUser(content);
    context.commit("addedUserData", data);
  },
  async editUsers(context, content) {
    let list = [];
    for (let i = 0; i < content.tenant.length; i++) {
      list[i] = content.tenant[i].id;
    }
    let userinfo = {
      first_name: content.first_name,
      last_name: content.last_name,
      id: content.id,
      email: content.email,
      role: content.role,
      is_active: content.is_active,
      tenant_list: list,
    };
    let { data } = await API.Users.editUser(userinfo);
  },
  async updateUsers(context, content) {
    let { data } = await API.Users.editUser(content);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
