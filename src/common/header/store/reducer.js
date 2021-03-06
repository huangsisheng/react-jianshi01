/*
 * @Author: your name
 * @Date: 2021-03-06 15:14:17
 * @LastEditTime: 2021-03-06 23:23:30
 * @LastEditors: Please set LastEditors
 * @Description: 状态管理文件
 * @FilePath: \react-jianshi01\src\common\header\store\reducer.js
 */
import { constants } from "./index"
// immutable（不可变的）库：保证state不被改变
import { fromJS } from "immutable"

// 把js对象转换成immutable对象
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            // immutable.set('key',value):会把上一次的state与这一次改变的状态整合成一个新的state并返回
            return state.set('focused', true)
        case constants.SEARCH_BLUR:
            return state.set('focused', false)
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHNANGE_LIST:
            // 如果多次set 就会返回多次，而merge只会返回一次
            return state.merge({ list: action.data, totalPage: action.totalPage })
        case constants.CHNANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}
export default reducer