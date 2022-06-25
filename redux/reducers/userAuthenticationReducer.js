import * as constant from "../constants/homePageConstants";

export const userAuthenticationReducer = (state = [], action) => {
  switch (action.type) {
    case constant.USER_AUTHENTICATION_INITIATE:
      return { status: "initiate", auth: [] };
    case constant.USER_AUTHENTICATION_SCUCESS:
      return { status: "success", auth: action.payload };

    case constant.USER_SIGN_OUT_SCUCESS:
      return { status: "signout_success", auth: action.payload };

    case constant.USER_AUTHENTICATION_FAIL:
      return { status: "error", error: action.payload };

    default:
      return state;
  }
};
