import { getCookie } from "../utils/session";

export const userInfo = {
  auth: {
    token: getCookie("token"),
    status: getCookie("status"),
    userId: getCookie("userId"),
    email: getCookie("email"),
    username: getCookie("username"),
    profilePic: getCookie("profilePic"),
  },
  isUserIsAuthenticated: true,
};
