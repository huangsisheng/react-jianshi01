/*
 * @Author: your name
 * @Date: 2021-03-06 15:39:12
 * @LastEditTime: 2021-03-06 23:33:16
 * @LastEditors: Please set LastEditors
 * @Description: action 生成器文件
 * @FilePath: \react-jianshi01\src\common\header\store\actionCreators.js
 */

import { constants } from "./index"
import { fromJS } from "immutable"
import axios from "axios"

// 文件内部使用的：
const changeList = (data) => ({
    type: constants.CHNANGE_LIST,
    data: fromJS(data),  // 将普通的js对象转换为immutable类型的对象
    totalPage: Math.ceil(data.length / 10)
})

// 需要导出到外部使用的：
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

// redux-thunk 允许我们将action返回成一个异步函数
export const getList = () => {
    return (dispatch) => {
        /* 
        create-react-app脚手架 启动的也是一个node服务
        默认会在工程目录下查找是否有对应的路由，如果找不到还会去 public目录下去查找的api目录
         */
        axios.get('/api/headerList.json').then(res => {
            console.log(res)
            const { data } = res
            if (data.code === 200) {
                dispatch(changeList(data.data))
            }
        }).catch(() => {
            console.error('get headerList error!')
        })
    }
}

export const changePage = (page) => ({
    type: constants.CHNANGE_PAGE,
    page
})