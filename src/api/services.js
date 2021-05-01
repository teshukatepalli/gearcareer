import axios from "axios";
import { authHeader, removeAuthData } from "../services/Auther";
import router from "../router";

const ApiEndpoint = "http://localhost:3000/api/v1";
const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

if (authHeader()) {
  headers["Authorization"] = "Bearer " + authHeader();
}
console.log(headers);

export default {
  get(url, id = "") {
    let urls;
    id
      ? (urls = `${ApiEndpoint}${url}/${id}`)
      : (urls = `${ApiEndpoint}${url}`);
    return axios({
      method: "get",
      url: `${urls}`,
      headers: headers,
    }).catch((err) => {
      router.currentRoute.path !== "/" ? router.push("/") : "";
      console.log(err);
      removeAuthData();
      return Promise.reject("Something went wrong");
    });
  },
  update(url, data, id = "") {
    let urls;
    id
      ? (urls = `${ApiEndpoint}${url}/${id}`)
      : (urls = `${ApiEndpoint}${url}`);
    return axios({
      method: "patch",
      url: `${urls}`,
      data: data,
      headers: headers,
    });
  },
  create(url, data) {
    return axios({
      method: "post",
      url: `${ApiEndpoint}${url}`,
      data: data,
      headers: headers,
    });
  },
  deleteBook(url, id) {
    return axios({
      method: "delete",
      url: `${ApiEndpoint}${url}/${id}`,
      headers: headers,
    });
  },
};
