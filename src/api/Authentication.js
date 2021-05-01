// import APIFetch from "@/services/Auth.js";
import APIs from "./services";
import axios from "axios";

export class Authentication {
  //signup
  static signup(data = {}) {
    return APIs.post("/users/", data);
  }

  //Login
  static login(data = {}) {
    delete data._id;
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
