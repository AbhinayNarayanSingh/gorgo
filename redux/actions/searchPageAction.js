import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { get } from "../../utils/request";

// Action
export const searchPostGETAction = (query) => {
  return { type: "GET_SEARCH_POST", query };
};

export function* watchSearchPostGET() {
  yield takeEvery("GET_SEARCH_POST", workerSearchPostGET);
}

export function* workerSearchPostGET({ query }) {
  try {
    yield put({ type: constant.SEARCH_POST_GET_INITIATE });
    const { data } = yield call(() => {
      return get(
        `everything?q=${query}&language=en&pageSize=10&sortBy=popularity`
      );
    });

    yield put({
      type: constant.SEARCH_POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    yield put({
      type: constant.SEARCH_POST_GET_FAIL,
      payload: error.message,
    });
  }
}
