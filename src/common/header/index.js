/*
* @Author: your name
* @Date: 2021-03-03 17:24:03
 * @LastEditTime: 2021-03-06 16:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\index.js
 */
import React, { Component } from "react";
// 动画库
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux"
import { actionCreators } from "./store"

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addtion,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./style";


class Header extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                                className={this.props.focused ? 'focused' : ''} />
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe61c;</i>
                        {this.getListArea(this.props.focused)}
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

    getListArea(show) {
        if (show) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索<SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        // 使用getIn方法获取immutable中的值,那个模块下对应的那个值
        focused: state.getIn(['header', 'focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

