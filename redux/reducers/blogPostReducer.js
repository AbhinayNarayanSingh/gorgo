import * as constant from "../constants/homePageConstants";

export const blogPostReducer = (state = [], action) => {
  switch (action.type) {
    case constant.BLOG_POST_INITIATE:
      return { status: "initiate", blogPost: [] };
    case constant.BLOG_POST_SCUCESS:
      return { status: "success", blogPost: action.payload };
    case constant.BLOG_POST_FAIL:
      return { status: "error", error: action.payload };

    case constant.BLOG_POST_GET_INITIATE:
      return { status: "initiate", blogPost: [] };
    case constant.BLOG_POST_GET_SCUCESS:
      return { status: "success", blogPost: action.payload };
    case constant.BLOG_POST_GET_FAIL:
      return { status: "error", error: action.payload };

    case constant.POST_LIKE_DISLIKE_INITIATE:
      return { ...state, status: "initiate", likeDisLikeStatus: false };
    case constant.POST_LIKE_DISLIKE_SCUCESS:
      return { ...state, status: "success", likeDisLikeStatus: true };
    case constant.POST_LIKE_DISLIKE_FAIL:
      return {
        ...state,
        status: "error",
        likeDisLikeStatusError: action.payload,
      };

    default:
      return state;
  }
};
