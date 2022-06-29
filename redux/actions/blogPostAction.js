import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { authGET, postWithToken } from "../../utils/request";

// action
export const blogPostPOSTAction = (body) => {
  return { type: "CREATE_BLOG_POST", body };
};

export const blogPostGETAction = (body) => {
  return { type: "BLOG_POST_GET", body };
};

export const blogPostLikeDisLikeGETAction = (body) => {
  return { type: "BLOG_POST_LIKE_DISLIKE_GET", body };
};

// watcher fn
export function* watchBlogPostPOST() {
  yield takeEvery("CREATE_BLOG_POST", workerBlogPostPOST);
  yield takeEvery("BLOG_POST_GET", workerBlogPostGET);
  yield takeEvery("BLOG_POST_LIKE_DISLIKE_GET", workerBlogPostLikeDisLikePOST);
}

// worker fn
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

export function* workerBlogPostGET({ body }) {
  try {
    yield put({ type: constant.BLOG_POST_GET_INITIATE });
    const { data } = yield call(() => authGET(`blogs/${body}`));
    yield put({ type: constant.BLOG_POST_GET_SCUCESS, payload: data["data"] });
  } catch (error) {
    yield put({
      type: constant.BLOG_POST_GET_FAIL,
      payload: error.message,
    });
  }
}

export function* workerBlogPostLikeDisLikePOST({ body }) {
  try {
    yield put({ type: constant.POST_LIKE_DISLIKE_INITIATE });

    yield call(() => {
      return postWithToken(`blogs/likeDislike/${body}`);
    });

    yield put({ type: constant.POST_LIKE_DISLIKE_SCUCESS });
  } catch (error) {
    yield put({
      type: constant.POST_LIKE_DISLIKE_FAIL,
      payload: error.message,
    });
  }
}
