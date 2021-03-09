/*
 * @Author: your name
 * @Date: 2021-03-07 21:53:46
 * @LastEditTime: 2021-03-08 17:24:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\components\TopPic.js
 */
import { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";
class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map((item) => (
          <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "recommendList"]),
});

export default connect(mapState, null)(Recommend);
