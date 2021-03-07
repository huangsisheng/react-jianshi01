/*
 * @Author: your name
 * @Date: 2021-03-04 22:48:10
 * @LastEditTime: 2021-03-07 22:31:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\store\reducer.js
 */
// combineReducers 把所有其他的store合并成一个store
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
const reducer = combineReducers({
  // 相当于命名空间
  header: headerReducer,
  home: homeReducer,
});
export default reducer;
