import * as constant from "../constants/homePageConstants";
import { takeEvery, call, put } from "redux-saga/effects";
import { UploadImage } from "../../utils/request";

// action
export const blogPostPOSTAction = (body) => {
  return { type: "CREATE_BLOG_POST", body };
};

export function* watchBlogPostPOST() {
  yield takeEvery("CREATE_BLOG_POST", workerBlogPostPOST);
}

export function* workerBlogPostPOST({ body }) {
  try {
    const { ImageArr, title, category, subTitle, content, tags } = body;
    const ImageArrUrl = [];

    //  { ImageArr: (1) […], title: "titile", category: "Business", subTitle: "Sub Title", content: "<p>content</p>", tags: (1) […] }
    ImageArr.map((n) => {
      UploadImage(n).then((n) => {
        console.log(n);
        ImageArrUrl.push(n);
      });
    });

    console.log(ImageArrUrl);
  } catch (error) {
    yield put({
      type: constant.BLOG_POST_FAIL,
      payload: error.message,
    });
  }
}
