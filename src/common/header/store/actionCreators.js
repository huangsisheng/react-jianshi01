/*
 * @Author: your name
 * @Date: 2021-03-06 15:39:12
 * @LastEditTime: 2021-03-06 15:44:44
 * @LastEditors: Please set LastEditors
 * @Description: action 生成器文件
 * @FilePath: \react-jianshi01\src\common\header\store\actionCreators.js
 */

import {constants} from "./index"

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})