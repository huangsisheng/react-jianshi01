/*
 * @Author: your name
 * @Date: 2021-03-07 22:23:16
 * @LastEditTime: 2021-03-09 22:22:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\store\reducer.js
 */
import { fromJS } from "immutable";
import { constants } from "./index";
const defaultState = fromJS({
  detailData: {},
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.DETAIL_DATA:
      return state.set("detailData", fromJS(action.data));
    default:
      return state;
  }
};
export default reducer;
