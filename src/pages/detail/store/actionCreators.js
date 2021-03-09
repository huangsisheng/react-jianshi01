/*
 * @Author: your name
 * @Date: 2021-03-08 21:29:07
 * @LastEditTime: 2021-03-09 22:42:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\store\actionCreators.js
 */
import axios from "axios";

import { constants } from "./index";
/* 内部使用的方法 */
const detailAction = (data) => ({
  type: constants.DETAIL_DATA,
  data,
});
/* 导出使用的方法 */
export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      if (res.data.code === 200) {
        dispatch(detailAction(res.data.data));
      }
    });
  };
};
