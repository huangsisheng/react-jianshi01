/*
 * @Author: your name
 * @Date: 2021-03-07 21:53:46
 * @LastEditTime: 2021-03-09 21:40:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\components\Topic.js
 */
import { PureComponent } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";
class Topic extends PureComponent {
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
