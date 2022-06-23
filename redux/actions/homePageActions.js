import * as constant from "../constants/homePageConstants";

import { takeEvery, call, put } from "redux-saga/effects";
import { get } from "../../utils/request";

// Action
export const homePagePostGETAction = (page) => {
  return { type: "GET_HOME_PAGE_POST", page };
};

export function* homePagePostGET() {
  yield takeEvery("GET_HOME_PAGE_POST", workerHomePagePostGET);
}

export function* workerHomePagePostGET(page) {
  try {
    yield put({ type: constant.POST_GET_INITIATE });

    const hero = yield call(() => {
      return get("top-headlines?language=en&pageSize=5&sortBy=popularity");
    });

    yield put({
      type: constant.HERO_POST_GET_SCUCESS,
      payload: hero["data"]["articles"],
    });

    const feature = yield call(() => {
      return get("top-headlines?country=us&language=en&pageSize=2");
    });

    yield put({
      type: constant.FEATURE_POST_GET_SCUCESS,
      payload: feature["data"]["articles"],
    });

    const post = yield call(() => {
      return get(
        `top-headlines?country=in&language=en&pageSize=10&page=${page}`
      );
    });

    yield put({
      type: constant.POST_GET_SCUCESS,
      payload: post["data"]["articles"],
    });
  } catch (error) {
    yield put({
      type: constant.POST_GET_FAIL,
      payload: error.message,
    });
  }
}
