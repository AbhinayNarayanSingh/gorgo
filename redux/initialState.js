import { getCookie } from "../utils/session";

export const userInfo =
  getCookie("email") && getCookie("token")
    ? {
        status: "success",
        auth: {
          token: getCookie("token"),
          email: getCookie("email"),
        },
      }
    : [];

// auth
