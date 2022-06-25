import * as constant from "../constants/homePageConstants";

export const blogPostReducer = (state = [], action) => {
  switch (action.type) {
    case constant.BLOG_POST_INITIATE:
      return { status: "initiate", blogPost: [] };
    case constant.BLOG_IMAGE_UPLOAD_SCUCESS:
      return { status: "ongoing" };
    case constant.BLOG_POST_SCUCESS:
      return { status: "success", blogPost: action.payload };

    case constant.BLOG_POST_FAIL:
      return { status: "error", error: action.payload };

    default:
      return state;
  }
};
