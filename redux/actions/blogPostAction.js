import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { authPOST, postWithToken } from "../../utils/request";
import { getCookie } from "../../utils/session";

// action
export const blogPostPOSTAction = (body) => {
  return { type: "CREATE_BLOG_POST", body };
};

export function* watchBlogPostPOST() {
  yield takeEvery("CREATE_BLOG_POST", workerBlogPostPOST);
}

export function* workerBlogPostPOST({ body }) {
  try {
    yield put({ type: constant.BLOG_POST_INITIATE });

    const { data } = yield call(() => {
      return postWithToken("blogs", body);
    });

    yield put({ type: constant.BLOG_POST_SCUCESS, payload: data });
  } catch (error) {
    yield put({
      type: constant.BLOG_POST_FAIL,
      payload: error.message,
    });
  }
}
