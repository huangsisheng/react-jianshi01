/*
 * @Author: your name
 * @Date: 2021-03-06 15:14:17
 * @LastEditTime: 2021-03-06 16:08:46
 * @LastEditors: Please set LastEditors
 * @Description: 状态管理文件
 * @FilePath: \react-jianshi01\src\common\header\store\reducer.js
 */
import { constants } from "./index"
// immutable（不可变的）库：保证state不被改变
import { fromJS } from "immutable"

// 把js对象转换成immutable对象
// 底层是使用的Map方法实现的
const defaultState = fromJS({
    focused: false
})
const reducer = (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable.set('key',value):会把上一次的state与这一次改变的状态整合成一个新的state并返回
        return state.set('focused', true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}
export default reducer