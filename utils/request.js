import axios from "axios";
import { API_URL, API_VERSION, API_KEY } from "./config";

// default common header
export const commonHeader = {
  "Content-Type": "application/json",
  "X-Api-Key": API_KEY,
};

// method to format api url
export const getUrl = (endpoint) => {
  return API_URL + API_VERSION + endpoint;
};

// get request
export const get = (endpoint) => {
  return axios.get(getUrl(endpoint), {
    headers: { ...commonHeader },
  });
};
