import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";

// Action
export const alertAction = (msg) => {
  return { type: "ALERT_POPUP", msg };
};

export function* watchAlert() {
  yield takeEvery("ALERT_POPUP", workerAlert);
}

export function* workerAlert({ msg }) {
  try {
    yield put({
      type: constant.ALERT_INITIATE,
      payload: msg,
    });
    setTimeout(() => {
      console.log("Alert");
    }, 3000);

    yield put({
      type: constant.ALERT_OVER,
      payload: "",
    });
  } catch (error) {}
}
