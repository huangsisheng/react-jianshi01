/*
 * @Author: your name
 * @Date: 2021-03-04 22:48:10
 * @LastEditTime: 2021-03-04 22:54:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\store\reducer.js
 */
import * as Types from './actionTypes'
const defaultState = {
    focused: false
}
export default (state = defaultState, action) => {
    if (action.type === Types.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === Types.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state
}