/*
 * @Author: your name
 * @Date: 2021-03-03 20:32:04
 * @LastEditTime: 2021-03-04 21:27:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\index.js
 */
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { Globalstyle } from "./style.js";
import { IconFont } from "./statics/iconfont/iconfont";
import App from "./App";

ReactDOM.render(
    <Fragment>
        <Globalstyle />
        <IconFont />
        <App />
    </Fragment>,
    document.getElementById("root")
);
