/*
 * @Author: your name
 * @Date: 2021-03-03 17:24:03
 * @LastEditTime: 2021-03-03 17:46:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\index.js
 */
import { Component } from "react";
import { HeaderWrapper, Logo, Nav } from "./style";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav />
      </HeaderWrapper>
    );
  }
}
export default Header;
