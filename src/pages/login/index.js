/*
 * @Author: your name
 * @Date: 2021-03-10 21:09:49
 * @LastEditTime: 2021-03-10 22:33:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\login\index.js
 */
import { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends PureComponent {
  render() {
    const { handleLogin,isLogin } = this.props;
    if (!isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              ref={(input) => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => {
                handleLogin(this.account, this.password);
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.getIn(["login", "isLogin"]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLogin(accountEle, passwordEle) {
    console.log(accountEle.value, passwordEle);
    if (!accountEle.value) {
      return alert("请输入账号");
    }
    if (!passwordEle.value) {
      return alert("请输入密码");
    }
    dispatch(actionCreators.login(accountEle.value, passwordEle.value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
