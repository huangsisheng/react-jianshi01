import { fromJS } from "immutable";
import { constants } from "./index";
const defaultState = fromJS({
  isLogin: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.IS_LOGIN:
      return state.set("isLogin", action.value);
    case constants.IS_LOGOUT:
      return state.set("isLogin", action.value);
    default:
      return state;
  }
};
export default reducer;
