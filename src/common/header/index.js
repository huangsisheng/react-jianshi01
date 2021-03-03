/*
 * @Author: your name
 * @Date: 2021-03-03 17:24:03
 * @LastEditTime: 2021-03-03 22:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\index.js
 */
import { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion, Button } from "./style";
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavSearch></NavSearch>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                </Nav>
                <Addtion>
                    <Button className="sign-up">注册</Button>
                    <Button className="write">写文章</Button>
                </Addtion>
            </HeaderWrapper>
        );
    }
}
export default Header;
