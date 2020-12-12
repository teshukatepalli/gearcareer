import axios from "axios";
import { authHeader } from "../services/Auther";

const ApiEndpoint = "http://localhost:3000/api/v1";
const headers = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

if (authHeader()) {
  headers["Authorization"] = "Bearer " + authHeader();
}

export default {
  get(url, id = "") {
    let urls;
    id ? (urls = `${ApiEndpoint}${url}/${id}`) : `${ApiEndpoint}${url}`;
    return axios({
      method: "get",
      url: urls,
      headers: headers,
    });
  },
  update(url, data, id = "") {
    let urls;
    id
      ? (urls = `${ApiEndpoint}${url}/${id}`)
      : (urls = `${ApiEndpoint}${url}`);
    console.log(ApiEndpoint, urls, id, url);
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
