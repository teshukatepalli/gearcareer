import axios from "axios";
// import { authHeader } from "./Auther";

const ApiEndpoint = "http://localhost:3000/api/v1";
const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

export default {
  get(url, id = "") {
    let urls;
    id ? (urls = `${url}/${id}`) : `${url}`;
    return axios({
      method: "get",
      url: urls,
      headers: headers,
    });
  },
  update(url, id, data) {
    return axios({
      method: "patch",
      url: `${ApiEndpoint}${url}/${id}`,
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
