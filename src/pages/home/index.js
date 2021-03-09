/*
 * @Author: your name
 * @Date: 2021-03-07 21:27:12
 * @LastEditTime: 2021-03-09 22:56:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\index.js
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writor from "./components/Writor";
import { actionCreators } from "./store";
/* 
    使用了connect 连接，当一个组件的数据状态发生变化，所有组件的render都会重新执行，特别浪费性能，
  所有使用PureComponent 组件，因为内部默认自带 shouldComponentUpdate 生命周期钩子，
  但是最好和 immutable.js结合使用(底层代码设计)，否则还是使用Component 以及自定义 shouldComponentUpdate钩子
 */
class Home extends PureComponent {
  handleBackTop() {
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props);

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
        {this.props.show ? (
          <BackTop onClick={this.handleBackTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getData();
    window.addEventListener("scroll", this.props.changeScrollShow);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollShow);
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.getIn(["home", "showBack"]),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData() {
    dispatch(actionCreators.getHomeData());
  },
  changeScrollShow() {
    let distance = document.documentElement.scrollTop;
    distance > 100
      ? dispatch(actionCreators.toggleBackTopShow(true))
      : dispatch(actionCreators.toggleBackTopShow(false));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
