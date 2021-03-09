/*
 * @Author: your name
 * @Date: 2021-03-04 22:48:10
 * @LastEditTime: 2021-03-09 22:29:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\store\reducer.js
 */
// combineReducers 把所有其他的store合并成一个store
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
const reducer = combineReducers({
  // 相当于命名空间
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
});
export default reducer;
