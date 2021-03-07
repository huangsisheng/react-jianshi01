/*
 * @Author: your name
 * @Date: 2021-03-07 21:53:46
 * @LastEditTime: 2021-03-07 22:49:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\components\Topic.js
 */
import { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";
class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map((item) => (
          <TopicItem key={item.get("id")}>
            <img className="Topci-pic" src={item.get("src")} alt="" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "topicList"]),
});
export default connect(mapState, null)(Topic);
