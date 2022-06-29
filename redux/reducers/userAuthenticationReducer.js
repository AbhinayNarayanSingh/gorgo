import * as constant from "../constants/homePageConstants";

export const userAuthenticationReducer = (
  state = { isUserIsAuthenticated: false },
  action
) => {
  switch (action.type) {
    case constant.USER_AUTHENTICATION_INITIATE:
      return { status: "initiate", auth: [], isUserIsAuthenticated: false };
    case constant.USER_AUTHENTICATION_SCUCESS:
      return {
        status: "success",
        auth: action.payload,
        isUserIsAuthenticated: true,
      };

    case constant.USER_SIGN_OUT_SCUCESS:
      return {
        status: "signout_success",
        auth: action.payload,
        isUserIsAuthenticated: false,
      };

    case constant.USER_AUTHENTICATION_FAIL:
      return {
        status: "error",
        error: action.payload,
        isUserIsAuthenticated: false,
      };

    default:
      return state;
  }
};
