import axios from "axios";
import {
  API_URL,
  API_VERSION,
  API_KEY,
  AUTH_API_URL,
  CLOUDINARY_UPLOAD_PRESET,
  MEDIA_DIRECTORY,
  CLOUDINARY_API_BASE,
  CLOUDINARY_CLOUD_NAME,
} from "./config";
import { ParseToken } from "./functions";
import { getCookie } from "./session";

// default common header
export const commonHeader = {
  "Content-Type": "application/json",
};

export const newsApiHeader = {
  "X-Api-Key": API_KEY,
};

// method to format api url
export const getUrl = (endpoint) => {
  return API_URL + API_VERSION + endpoint;
};

export const authGetUrl = (endpoint) => {
  return AUTH_API_URL + endpoint;
};

// HTTP METHODS
export const get = (endpoint) => {
  return axios.get(getUrl(endpoint), {
    headers: { ...commonHeader, ...newsApiHeader },
  });
};

export const authGET = (endpoint) => {
  return axios.get(authGetUrl(endpoint), {
    headers: { ...commonHeader },
  });
};

export const authPOST = (endpoint, body) => {
  return axios.post(authGetUrl(endpoint), body, {
    headers: { ...commonHeader },
  });
};

export const postWithToken = (endpoint, data, otherHeaders) => {
  axios.defaults.headers.common["authorization"] = ParseToken(
    getCookie("token")
  );
  return axios.post(authGetUrl(endpoint), data, {
    headers: { ...commonHeader, ...otherHeaders },
  });
};

export const UploadImage = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("folder", `${MEDIA_DIRECTORY}`);

    const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/image/upload/`;
    const res = await fetch(apiUrl, {
      method: "POST",
      body: data,
    });
    const resultJson = await res.json();

    return resultJson.secure_url;
  } catch (error) {
    console.error("failed to upload image: ", error);
    return null;
  }
};
