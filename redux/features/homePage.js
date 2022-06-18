import axios from "axios";
import { newsapi, API_KEY } from "../var";

const HERO_POST_GET_INITIATE = "HERO_POST_GET_INITIATE";
const HERO_POST_GET_SCUCESS = "HERO_POST_GET_SCUCESS";
const HERO_POST_GET_FAIL = "HERO_POST_GET_FAIL";

const FEATURE_POST_GET_INITIATE = "FEATURE_POST_GET_INITIATE";
const FEATURE_POST_GET_SCUCESS = "FEATURE_POST_GET_SCUCESS";
const FEATURE_POST_GET_FAIL = "FEATURE_POST_GET_FAIL";

const POST_GET_INITIATE = "POST_GET_INITIATE";
const POST_GET_SCUCESS = "POST_GET_SCUCESS";
const POST_GET_FAIL = "POST_GET_FAIL";

const initialState = {
  hero: [],
  feature: [],
  post: [],
};

export const postGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case HERO_POST_GET_INITIATE:
      return { ...state, status: "initiate", hero: [] };
    case HERO_POST_GET_SCUCESS:
      return { ...state, status: "success", hero: action.payload };
    case HERO_POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    case FEATURE_POST_GET_INITIATE:
      return { ...state, status: "initiate", feature: [] };
    case FEATURE_POST_GET_SCUCESS:
      return { ...state, status: "success", feature: action.payload };
    case FEATURE_POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    case POST_GET_INITIATE:
      return { ...state, status: "initiate", post: [] };
    case POST_GET_SCUCESS:
      return { ...state, status: "success", post: action.payload };
    case POST_GET_FAIL:
      return { ...state, status: "error", error: action.payload };

    default:
      return state;
  }
};

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const postGetAction = () => async (dispatch) => {
  // hero
  try {
    dispatch({ type: HERO_POST_GET_INITIATE });

    const { data } = await axios.get(
      `${newsapi}top-headlines?language=en&pageSize=5&sortBy=popularity&apiKey=${API_KEY}`,
      config
    );

    dispatch({
      type: HERO_POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    dispatch({ type: HERO_POST_GET_FAIL, payload: error.message });
  }

  //   feature
  try {
    dispatch({ type: FEATURE_POST_GET_INITIATE });

    const { data } = await axios.get(
      `${newsapi}top-headlines?country=us&language=en&pageSize=2&apiKey=${API_KEY}`,
      config
    );

    dispatch({
      type: FEATURE_POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    dispatch({ type: FEATURE_POST_GET_FAIL, payload: error.message });
  }

  //   post
  try {
    dispatch({ type: POST_GET_INITIATE });

    const { data } = await axios.get(
      `${newsapi}top-headlines?country=in&language=en&pageSize=10&apiKey=${API_KEY}`,
      config
    );

    dispatch({
      type: POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    dispatch({ type: POST_GET_FAIL, payload: error.message });
  }
};

// https://newsapi.org/v2/top-headlines?language=en&pageSize=3&sortBy=popularity&apiKey=2bd168347ff445e0a474304f66d1cc80
