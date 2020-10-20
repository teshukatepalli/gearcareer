import axios from "axios";
import { authHeader } from "./Auther";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    token: localStorage.getItem("token"),
  },
});
instance.interceptors.request.use(function(config) {
  let token = authHeader();
  if (token) {
    config.headers = {
      ...config.headers,
      token: token,
    };
  }

  return config;
});

instance.interceptors.response.use(
  function(response) {
    // Return the response
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      // Authentication failed, redirect to the login page,
      // if we are not already on the login page
      if (window.location.pathname.search("/callback") != 0) {
        // window.location = '/callback';
        // auth.logOut();
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
