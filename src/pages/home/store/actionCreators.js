/*
 * @Author: your name
 * @Date: 2021-03-08 21:29:07
 * @LastEditTime: 2021-03-09 21:31:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\store\actionCreators.js
 */
import axios from "axios";

import { constants } from "./index";
/* 内部使用的方法 */
const getData = (data) => ({
  type: constants.HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
});
const getMoreList = (data, page) => ({
  type: constants.MORE_lIST_DATA,
  moreList: data,
  page,
});
/* 内部使用的方法 */

/* 导出使用的方法 */
export const getHomeData = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      if (res.data.code === 200) {
        dispatch(getData(res.data.data));
      }
    });
  };
};
export const getMoreData = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      if (res.data.code === 200) {
        dispatch(getMoreList(res.data.data, page + 1));
      }
    });
  };
};

export const toggleBackTopShow = (flag) => ({
  type: constants.TOGGLE_SHOW,
  show: flag,
});

/* 导出使用的方法 */
