import Cookies from "js-cookie";

export const setCookie = (key, value) => {
  if (process.browser) {
    Cookies.set(key, value, {
      expires: 1,
      path: "/",
    });
  } else {
    console.error("setCookie failed");
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    Cookies.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  return process.browser ? getCookieFromBrowser(key) || "" : "";
};
const getCookieFromBrowser = (key) => {
  return Cookies.get(key);
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
