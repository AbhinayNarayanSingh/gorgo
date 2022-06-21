import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { newsapi, API_KEY } from "../var";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

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
      return axios.get(
        `${newsapi}everything?q=${query}&language=en&pageSize=10&sortBy=popularity&apiKey=${API_KEY}`,
        config
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
