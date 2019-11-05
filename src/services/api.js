import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  const { modalUploadOpen } = store.getState().files;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (modalUploadOpen) {
    headers["Content-Type"] = "multipart/form-data;";
    headers.Accept = "multipart/form-data;";
  }

  return { ...config, headers };
});

export default api;
