/*
 * @Author: your name
 * @Date: 2021-03-03 17:24:03
 * @LastEditTime: 2021-03-10 22:45:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\index.js
 */
import React, { Component } from "react";
// 动画库
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as loginCreators } from "../../pages/login/store";

import { Link } from "react-router-dom";
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
  SearchInfoList,
} from "./style";

class Header extends Component {
  // constructor(props) {
  //     super(props)
  // }

  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    let newList = list.toJS(), // 把immutable 对象转换为JS对象
      eleList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        eleList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className={"iconfont spin"}
              >
                &#xe63a;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{eleList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      focused,
      list,
      isLogin,
      handleFocus,
      handleBlur,
      handleLogout,
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={500} classNames="slide">
              <NavSearch
                onFocus={() => {
                  handleFocus(list);
                }}
                onBlur={handleBlur}
                className={focused ? "focused" : ""}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe61c;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          {isLogin ? (
            <NavItem
              className="right"
              onClick={() => {
                handleLogout();
              }}
            >
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
        </Nav>
        <Addtion>
          <Button className="sign-up">注册</Button>
          <Button className="write">
            <Link to="/write">
              <i className="iconfont">&#xe676;</i>写文章
            </Link>
          </Button>
        </Addtion>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // 使用getIn方法获取immutable中的值,那个模块下对应的那个值
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    isLogin: state.getIn(["login", "isLogin"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      console.log(list);
      // 默认会把dispatch 作为参数传递进去，redux-thunk
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, el) {
      let originAngle = el.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      el.style.transform = `rotate(${originAngle + 360}deg)`;
      page < totalPage
        ? dispatch(actionCreators.changePage(page + 1))
        : dispatch(actionCreators.changePage(1));
    },
    handleLogout() {
      dispatch(loginCreators.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
