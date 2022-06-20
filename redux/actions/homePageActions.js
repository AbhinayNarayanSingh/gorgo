import axios from "axios";
import { newsapi, API_KEY } from "../var";
import * as constant from "../constants/homePageConstants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const postGetAction = () => async (dispatch) => {
  // hero
  try {
    dispatch({ type: constant.HERO_POST_GET_INITIATE });

    const { data } = await axios.get(
      `${newsapi}top-headlines?language=en&pageSize=5&sortBy=popularity&apiKey=${API_KEY}`,
      config
    );

    dispatch({
      type: constant.HERO_POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    dispatch({ type: constant.HERO_POST_GET_FAIL, payload: error.message });
  }

  //   feature
  try {
    dispatch({ type: constant.FEATURE_POST_GET_INITIATE });

    const { data } = await axios.get(
      `${newsapi}top-headlines?country=us&language=en&pageSize=2&apiKey=${API_KEY}`,
      config
    );

    dispatch({
      type: constant.FEATURE_POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    dispatch({ type: constant.FEATURE_POST_GET_FAIL, payload: error.message });
  }

  //   post
  try {
    dispatch({ type: constant.POST_GET_INITIATE });

    const { data } = await axios.get(
      `${newsapi}top-headlines?country=in&language=en&pageSize=10&apiKey=${API_KEY}`,
      config
    );

    dispatch({
      type: constant.POST_GET_SCUCESS,
      payload: data["articles"],
    });
  } catch (error) {
    dispatch({ type: constant.POST_GET_FAIL, payload: error.message });
  }
};

// https://newsapi.org/v2/top-headlines?language=en&pageSize=3&sortBy=popularity&apiKey=2bd168347ff445e0a474304f66d1cc80

export const postGetActionSage = () => {
  type: constant.HERO_POST_GET_INITIATE;
};
