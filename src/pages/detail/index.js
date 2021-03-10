/*
 * @Author: your name
 * @Date: 2021-03-07 21:32:44
 * @LastEditTime: 2021-03-10 23:03:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\detail\index.js
 */
import { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import { DetailWrapper, Header, Content } from "./style";
class Detail extends PureComponent {
  render() {
    const { detail } = this.props;
    return (
      <DetailWrapper>
        <Header>{detail.get("title")}</Header>
        {/* 解析html字符串 */}
        <Content dangerouslySetInnerHTML={{ __html: detail.get("content") }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getData(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  detail: state.getIn(["detail", "detailData"]),
});
const mapDispatchToProps = (dispatch) => ({
  getData(id) {
    dispatch(actionCreators.getDetailData(id));
  },
});
// withRouter让其能获取到router全部的属性与方法
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
