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
export const categoryPostGETAction = (cat) => {
  return { type: "GET_CATEGORY_POST", cat };
};

export function* watchCategoryPostGET() {
  yield takeEvery("GET_CATEGORY_POST", workerCategoryPostGET);
}

export function* workerCategoryPostGET({ cat }) {
  try {
    yield put({ type: constant.CATEGORY_POST_GET_INITIATE });
    const { data } = yield call(() => {
      return axios.get(
        `${newsapi}top-headlines?language=en&category=${cat}&pageSize=10&sortBy=popularity&apiKey=${API_KEY}`,
        config
      );
    });

    yield put({
      type: constant.CATEGORY_POST_GET_SCUCESS,
      payload: data["articles"],
    });

    const res = yield call(() => {
      return axios.get(
        `${newsapi}top-headlines?language=en&pageSize=10&country=in&sortBy=popularity&apiKey=${API_KEY}`,
        config
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
