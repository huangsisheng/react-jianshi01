/*
 * @Author: your name
 * @Date: 2021-03-03 17:29:46
 * @LastEditTime: 2021-03-09 21:51:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\style.js
 */
import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  line-height: 56px;
  border-color: #f0f0f0;
  border: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  float: left;
  height: 56px;
  width: 100px;
  background: url(${logoPic}) no-repeat center;
  background-size: contain;
`;
export const Nav = styled.nav`
  float: left;
  border-color: #e7e7e7;
  width: 960px;
  height: 56px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (max-width: 1080px) {
    width: 750px;
  }
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;

  &.left {
    float: left;
    color: #969696;
  }
  &.right {
    float: right;
    color: #969696;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 11px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    &.focused {
      background-color: #969696;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  padding: 0 42px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  transition: width 0.5s;
  outline: none;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.5s ease-out;
    width: 160px;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.5s ease-out;
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    margin-right: 2px;
    font-size: 12px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.span`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  color: #787878;
  border: 1px solid #ddd;
  font-size: 12px;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const Addtion = styled.div`
  float: left;
  display: flex;
`;

export const Button = styled.div`
  text-align: center;
  margin: 9px 5px 0 15px;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  &.sign-up {
    width: 80px;
    height: 38px;
    line-height: 38px;
    border: 1px solid rgba(236, 97, 73, 0.7);
    color: #ea6f5a;
    background-color: transparent;
  }
  &.write {
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
`;
