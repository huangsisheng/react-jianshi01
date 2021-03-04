/*
* @Author: your name
* @Date: 2021-03-03 17:24:03
 * @LastEditTime: 2021-03-04 22:58:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\index.js
 */
import React from "react";
// 动画库
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux"
import {
    SEARCH_FOCUS,
    SEARCH_BLUR
} from '../../store/actionTypes'

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchWrapper
} from "./style";
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={500}
                        classNames="slide"
                    >
                        <NavSearch
                            onFocus={props.handleFocus}
                            onBlur={props.handleBlur}
                            className={props.focused ? 'focused' : ''} />
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe61c;</i>
                </SearchWrapper>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <NavItem className="right">登录</NavItem>
            </Nav>
            <Addtion>
                <Button className="sign-up">注册</Button>
                <Button className="write"><i className="iconfont">&#xe676;</i>写文章</Button>
            </Addtion>
        </HeaderWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = { type: SEARCH_FOCUS }
            dispatch(action)
        },
        handleBlur() {
            const action = { type: SEARCH_BLUR }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

