import * as constant from "../constants/homePageConstants";

export const alertReducer = (
  state = {
    active: false,
    alertMsg: "",
  },
  action
) => {
  switch (action.type) {
    case constant.ALERT_INITIATE:
      return { ...state, active: true, alertMsg: action.payload };

    case constant.ALERT_OVER:
      return { ...state, active: false, alertMsg: action.payload };

    default:
      return state;
  }
};
