/*
 * @Author: your name
 * @Date: 2021-03-07 21:27:12
 * @LastEditTime: 2021-03-08 21:47:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\index.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writor from "./components/Writor";
import { actionCreators } from "./store";
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-pic"
            src="https://p.gsxcdn.com/937776736_94lzud41.jpg"
            alt=""
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writor></Writor>
        </HomeRight>
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData() {
    dispatch(actionCreators.getHomeData());
  },
});
export default connect(null, mapDispatchToProps)(Home);
