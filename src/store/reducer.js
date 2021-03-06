/*
 * @Author: your name
 * @Date: 2021-03-04 22:48:10
 * @LastEditTime: 2021-03-06 16:17:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\store\reducer.js
 */
// redux-immutable:
import { combineReducers } from "redux-immutable"
import { reducer as headerReducer } from '../common/header/store'
const reducer = combineReducers({
    // 相当于命名空间
    header: headerReducer
})
export default reducer