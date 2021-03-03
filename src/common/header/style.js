/*
 * @Author: your name
 * @Date: 2021-03-03 17:29:46
 * @LastEditTime: 2021-03-03 22:50:09
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

export const Logo = styled.a`
  display: block;
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
@media (min-width: 768px){
    width: 750px;
}
@media (min-width: 992px){
    width: 960px;
}
@media (max-width: 1080px){
    width: 750px;
}
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    cursor: pointer;

    &.left{
        float: left;
        color:#969696;
    }
    &.right{
        float: right;
        color:#969696;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width .5s;
    outline: none;
    &::placeholder{
        color:#999;
    }
`

export const Addtion = styled.div`
    float:left;
    display:flex;
`

export const Button = styled.div`
    text-align:center;
    margin: 9px 5px 0 15px;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
    &.sign-up{
    width: 80px;
        height: 38px;
        line-height: 38px;
        border: 1px solid rgba(236,97,73,.7);
        color: #ea6f5a;
        background-color: transparent;
    }
    &.write{
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
`