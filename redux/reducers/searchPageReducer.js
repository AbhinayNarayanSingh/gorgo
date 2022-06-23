import * as constant from "../constants/homePageConstants";

export const searchPostGETReducer = (
  state = {
    post: [],
  },
  action
) => {
  switch (action.type) {
    case constant.SEARCH_POST_GET_INITIATE:
      return { ...state, status: "initiate" };
    case constant.SEARCH_POST_GET_SCUCESS:
      return { ...state, status: "success", post: action.payload };

    case constant.SEARCH_POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};
