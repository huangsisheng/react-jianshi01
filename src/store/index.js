/*
 * @Author: your name
 * @Date: 2021-03-04 22:48:01
 * @LastEditTime: 2021-03-04 22:49:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\store\index.js
 */
import { createStore } from "redux"
import reducer from "./reducer"

const store = createStore(reducer)
export default store