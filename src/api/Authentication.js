import APIFetch from "@/services/Auth.js";
import axios from "axios";

export class Authentication {
  //signup
  static signup(data = {}) {
    return axios({
      method: "post",
      url: `http://localhost:3000/user/signup/`,
      data: data,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
  }

  //Login
  static login(data = {}) {
    return axios({
      method: "post",
      url: `http://localhost:3000/user/login/`,
      data: data,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });
  }

  //User information
  static user() {
    return APIFetch.get("/user/me/");
  }
}
