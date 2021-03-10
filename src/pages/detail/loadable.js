/*
 * @Author: your name
 * @Date: 2021-03-10 23:02:11
 * @LastEditTime: 2021-03-10 23:07:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\detail\loadable.js
 */
import Loadable from "react-loadable";
const LoadDetail = Loadable({
  // 需要异步加载的组件
  loader: () => import("./index"),
  // 加载过程展现的内容
  loading: () => {
    return "is Loading...";
  },
});

export default () => <LoadDetail />;
