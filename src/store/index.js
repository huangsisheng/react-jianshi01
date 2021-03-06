/*
 * @Author: your name
 * @Date: 2021-03-04 22:48:01
 * @LastEditTime: 2021-03-06 15:00:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\store\index.js
 */
import { createStore, compose } from "redux"
import reducer from "./reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers())
export default store