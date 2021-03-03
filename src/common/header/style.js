/*
 * @Author: your name
 * @Date: 2021-03-03 17:29:46
 * @LastEditTime: 2021-03-03 17:48:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\common\header\style.js
 */
import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  line-height: 56px;
  border-color: #f0f0f0;
  border: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  background: url(${logoPic}) no-repeat center;
  background-size: contain;
`;
export const Nav = styled.nav`
  border-color: #e7e7e7;
  width: 960px;
  height: 56px;
`;
