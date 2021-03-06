import * as constant from "../constants/homePageConstants";

const initialState = {
  hero: [],
  feature: [],
  post: [],
};

export const postGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.HERO_POST_GET_INITIATE:
      return { ...state, status: "initiate" };
    case constant.HERO_POST_GET_SCUCESS:
      return { ...state, status: "success", hero: action.payload };
    case constant.HERO_POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    case constant.FEATURE_POST_GET_INITIATE:
      return { ...state, status: "initiate" };
    case constant.FEATURE_POST_GET_SCUCESS:
      return { ...state, status: "success", feature: action.payload };
    case constant.FEATURE_POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    case constant.POST_GET_INITIATE:
      return { ...state, status: "initiate" };
    case constant.POST_GET_SCUCESS:
      return {
        ...state,
        status: "success",
        post: [...state.post, ...action.payload],
      };
    case constant.POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};

export const categoryPostGETReducer = (
  state = {
    hero: [],
    post: [],
  },
  action
) => {
  switch (action.type) {
    case constant.CATEGORY_POST_GET_INITIATE:
      return { ...state, status: "initiate", post: [...action.payload] };
    case constant.CATEGORY_POST_UPDATE_GET_INITIATE:
      return { ...state, status: "initiate" };
    case constant.CATEGORY_POST_GET_SCUCESS:
      return {
        ...state,
        status: "success",
        post: [...state.post, ...action.payload],
      };
    case constant.CATEGORY_HERO_POST_GET_SCUCESS:
      return { ...state, status: "success", hero: action.payload };
    case constant.CATEGORY_POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};
