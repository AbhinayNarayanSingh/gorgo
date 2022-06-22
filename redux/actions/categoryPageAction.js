import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { get } from "../../utils/request";

// Action
export const categoryPostGETAction = (cat, limit) => {
  return { type: "GET_CATEGORY_POST", cat, limit };
};

export function* watchCategoryPostGET() {
  yield takeEvery("GET_CATEGORY_POST", workerCategoryPostGET);
}

export function* workerCategoryPostGET({ cat, limit }) {
  try {
    yield put({ type: constant.CATEGORY_POST_GET_INITIATE });

    const { data } = yield call(() => {
      return get(
        `top-headlines?language=en&category=${cat}&pageSize=10&page=${limit}&sortBy=popularity`
      );
    });

    yield put({
      type: constant.CATEGORY_POST_GET_SCUCESS,
      payload: data["articles"],
    });

    const res = yield call(() => {
      return get(
        "top-headlines?language=en&pageSize=10&country=in&sortBy=popularity"
      );
    });

    yield put({
      type: constant.CATEGORY_HERO_POST_GET_SCUCESS,
      payload: res["data"]["articles"],
    });
  } catch (error) {
    yield put({
      type: constant.CATEGORY_POST_GET_FAIL,
      payload: error.message,
    });
  }
}
