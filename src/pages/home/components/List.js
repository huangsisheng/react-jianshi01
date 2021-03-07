/*
 * @Author: your name
 * @Date: 2021-03-07 21:53:46
 * @LastEditTime: 2021-03-07 23:14:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\components\TopPic.js
 */
import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo } from "../style";
class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        {list.map((item) => (
          <ListItem Key={item.get("id")}>
            {item.get("src") ? (
              <img className="pic" src={item.get("src")} alt="" />
            ) : null}
            <ListInfo>
              <h3 className="title">{item.get("title")}</h3>
              <p className="desc">{item.get("desc")}</p>
              <div></div>
            </ListInfo>
          </ListItem>
        ))}
      </Fragment>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
});

export default connect(mapState, null)(List);
