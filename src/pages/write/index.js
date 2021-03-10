/*
 * @Author: your name
 * @Date: 2021-03-10 21:09:49
 * @LastEditTime: 2021-03-10 22:44:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\login\index.js
 */
import { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Write extends PureComponent {
  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      return "writer";
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.getIn(["login", "isLogin"]),
  };
};

export default connect(mapStateToProps, null)(Write);
