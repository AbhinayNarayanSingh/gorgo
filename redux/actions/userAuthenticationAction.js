import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { authPOST } from "../../utils/request";
import {
  getCookie,
  removeLocalStorage,
  removeUserInfoCookie,
  setCookie,
  setUserInfoCookie,
} from "../../utils/session";

// Action
export const userSignInAuthenticationAction = (body) => {
  return { type: "USER_SIGN_IN_SAGA", body };
};

export const userSignUpAuthenticationAction = (body) => {
  return { type: "USER_SIGN_UP_SAGA", body };
};

export const userSignOutAuthenticationAction = () => {
  return { type: "USER_SIGN_OUT_SAGA" };
};

export const userSessionResumeAction = () => {
  return { type: "RESUME_SESSION" };
};

export function* watchUserAuthentication() {
  yield takeEvery("USER_SIGN_IN_SAGA", workerUserSignInAuthentication);
  yield takeEvery("USER_SIGN_UP_SAGA", workerUserSignUpAuthentication);
  yield takeEvery("USER_SIGN_OUT_SAGA", workerUserSignOutAuthentication);
  yield takeEvery("RESUME_SESSION", workerUserSessionResume);
}

export function* workerUserSignUpAuthentication({ body }) {
  try {
    yield put({ type: constant.USER_AUTHENTICATION_INITIATE });
    const { data } = yield call(() => {
      return authPOST(`registration`, body);
    });

    setUserInfoCookie(data["data"]);

    yield put({
      type: constant.USER_AUTHENTICATION_SCUCESS,
      payload: data["data"],
    });
  } catch (error) {
    yield put({
      type: constant.USER_AUTHENTICATION_FAIL,
      payload: error.message,
    });
  }
}

export function* workerUserSignInAuthentication({ body }) {
  try {
    yield put({ type: constant.USER_AUTHENTICATION_INITIATE });
    const { data } = yield call(() => {
      return authPOST(`login`, body);
    });
    setUserInfoCookie(data["data"]);

    yield put({
      type: constant.USER_AUTHENTICATION_SCUCESS,
      payload: data["data"],
    });
  } catch (error) {
    yield put({
      type: constant.USER_AUTHENTICATION_FAIL,
      payload: error.message,
    });
  }
}

export function* workerUserSignOutAuthentication() {
  try {
    removeLocalStorage("auth");
    removeUserInfoCookie();

    yield put({
      type: constant.USER_SIGN_OUT_SCUCESS,
      payload: [],
    });
  } catch (error) {
    yield put({
      type: constant.USER_AUTHENTICATION_FAIL,
      payload: error.message,
    });
  }
}

export function* workerUserSessionResume() {
  try {
    yield put({ type: constant.USER_AUTHENTICATION_INITIATE });
    const data = {
      token: getCookie("token"),
      status: getCookie("status"),
      userId: getCookie("userId"),
      email: getCookie("email"),
      username: getCookie("username"),
      profilePic: getCookie("profilePic"),
    };
    yield put({
      type: constant.USER_AUTHENTICATION_SCUCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: constant.USER_AUTHENTICATION_FAIL,
      payload: error.message,
    });
  }
}
