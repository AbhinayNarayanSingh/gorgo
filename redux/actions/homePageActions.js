import axios from "axios";
import { newsapi, API_KEY } from "../var";
import * as constant from "../constants/homePageConstants";

import { takeEvery, call, put } from "redux-saga/effects";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Action
export const homePagePostGETAction = () => {
  return { type: "GET_HOME_PAGE_POST" };
};

export function* homePagePostGET() {
  yield takeEvery("GET_HOME_PAGE_POST", workerHomePagePostGET);
}

export function* workerHomePagePostGET({ cat }) {
  try {
    yield put({ type: constant.POST_GET_INITIATE });

    const hero = yield call(() => {
      return axios.get(
        `${newsapi}top-headlines?language=en&pageSize=5&sortBy=popularity&apiKey=${API_KEY}`,
        config
      );
    });

    yield put({
      type: constant.HERO_POST_GET_SCUCESS,
      payload: hero["data"]["articles"],
    });

    const feature = yield call(() => {
      return axios.get(
        `${newsapi}top-headlines?country=us&language=en&pageSize=2&apiKey=${API_KEY}`,
        config
      );
    });

    yield put({
      type: constant.FEATURE_POST_GET_SCUCESS,
      payload: feature["data"]["articles"],
    });

    const post = yield call(() => {
      return axios.get(
        `${newsapi}top-headlines?country=in&language=en&pageSize=10&apiKey=${API_KEY}`,
        config
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

// export const postGetAction = () => async (dispatch) => {
//   // hero
//   try {
//     dispatch({ type: constant.HERO_POST_GET_INITIATE });

//     const { data } = await axios.get(
//       `${newsapi}top-headlines?language=en&pageSize=5&sortBy=popularity&apiKey=${API_KEY}`,
//       config
//     );

//     dispatch({
//       type: constant.HERO_POST_GET_SCUCESS,
//       payload: data["articles"],
//     });
//   } catch (error) {
//     dispatch({ type: constant.HERO_POST_GET_FAIL, payload: error.message });
//   }

//   //   feature
//   try {
//     dispatch({ type: constant.FEATURE_POST_GET_INITIATE });

// const { data } = await axios.get(
//   `${newsapi}top-headlines?country=us&language=en&pageSize=2&apiKey=${API_KEY}`,
//   config
// );

//     dispatch({
//       type: constant.FEATURE_POST_GET_SCUCESS,
//       payload: data["articles"],
//     });
//   } catch (error) {
//     dispatch({ type: constant.FEATURE_POST_GET_FAIL, payload: error.message });
//   }

//   //   post
//   try {
//     dispatch({ type: constant.POST_GET_INITIATE });

// const { data } = await axios.get(
//   `${newsapi}top-headlines?country=in&language=en&pageSize=10&apiKey=${API_KEY}`,
//   config
// );

//     dispatch({
//       type: constant.POST_GET_SCUCESS,
//       payload: data["articles"],
//     });
// } catch (error) {
//   dispatch({ type: constant.POST_GET_FAIL, payload: error.message });
// }
// };

// export const postGetActionSage = () => {
//   type: constant.HERO_POST_GET_INITIATE;
// };
