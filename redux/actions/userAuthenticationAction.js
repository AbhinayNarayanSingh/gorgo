import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { authPOST } from "../../utils/request";
import { removeLocalStorage, setLocalStorage } from "../../utils/session";

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

export function* watchUserAuthentication() {
  yield takeEvery("USER_SIGN_IN_SAGA", workerUserSignInAuthentication);
  yield takeEvery("USER_SIGN_UP_SAGA", workerUserSignUpAuthentication);
  yield takeEvery("USER_SIGN_OUT_SAGA", workerUserSignOutAuthentication);
}

export function* workerUserSignUpAuthentication({ body }) {
  try {
    yield put({ type: constant.USER_AUTHENTICATION_INITIATE });
    const { data } = yield call(() => {
      return authPOST(`registration`, body);
    });

    setLocalStorage("auth", data["data"]);

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

    setLocalStorage("auth", data["data"]);

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
