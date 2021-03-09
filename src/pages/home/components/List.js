/*
 * @Author: your name
 * @Date: 2021-03-07 21:53:46
 * @LastEditTime: 2021-03-09 23:01:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\components\TopPic.js
 */
import { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { ListItem, ListInfo, LoadMore } from "../style";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <Fragment>
        {list.map((item, index) => (
          // 动态路由 '/dietail/id'
          <Link
            to={"/detail/" + item.get("id")}
            Key={item.get("id") + index}
          >
            <ListItem>
              {item.get("src") ? (
                <img className="pic" src={item.get("src")} alt="" />
              ) : null}
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
                <div></div>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        {/* 隔离作用域，否则this指向undefined,不用箭头函数隔离，可能会导致不停的调用方法 */}
        <LoadMore
          onClick={() => {
            getMoreList(page);
          }}
        >
          更多文字
        </LoadMore>
      </Fragment>
    );
  }
}
const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "listPage"]),
});
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreData(page));
  },
});

export default connect(mapState, mapDispatch)(List);
