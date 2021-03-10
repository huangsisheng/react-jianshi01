/*
 * @Author: your name
 * @Date: 2021-03-10 21:13:23
 * @LastEditTime: 2021-03-10 21:29:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\login\style.js
 */

import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
`;

export const LoginBox = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  width: 400px;
  height: 220px;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  vertical-align: middle;
  color:#777;
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 auto;
  background-color: hsla(0, 0%, 71%, 0.1);
`;
export const Button = styled.button`
  display: block;
  width: 200px;
  text-align: center;
  background: #3194d0;
  margin: 0 auto;
  margin-top: 20px;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  outline: none;
  clear: both;
`;
