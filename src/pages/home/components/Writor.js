/*
 * @Author: your name
 * @Date: 2021-03-07 21:53:46
 * @LastEditTime: 2021-03-09 21:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\components\TopPic.js
 */
import { PureComponent } from "react";
import { WritorWrapper, WritorToggle, WritorItem, WritorAll } from "../style";
class Writor extends PureComponent {
  render() {
    return (
      <WritorWrapper>
        <WritorToggle>
          <span className="search-left">推荐作者</span>
          <span className="search-right">
            <i
              ref={(icon) => {
                this.spinIcon = icon;
              }}
              className={"iconfont spin"}
            >
              &#xe63a;
            </i>
            换一批
          </span>
        </WritorToggle>
        <WritorItem></WritorItem>
        <WritorAll></WritorAll>
      </WritorWrapper>
    );
  }
}


export default Writor;
