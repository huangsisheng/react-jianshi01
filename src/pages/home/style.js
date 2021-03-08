/*
 * @Author: your name
 * @Date: 2021-03-07 21:45:20
 * @LastEditTime: 2021-03-08 22:19:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\style.js
 */
import styled from "styled-components";

export const HomeWrapper = styled.main`
  overflow: hidden;
  width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const HomeLeft = styled.section`
  float: left;
  width: 625px;
  padding-top: 30px;
  .banner-pic {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.section`
  float: right;
  width: 280px;
  padding: 30px 0 0;
  margin-left: 30px;
`;

/* topic */
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  font-size: 14px;
  .Topci-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
/* topic */

/* List */
export const ListItem = styled.div`
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #8a868e;
  margin: 30px 0;
  cursor: pointer;
  border-radius:20px;
  color:#fff;
`;
/* List */

/* Recommend */

export const RecommendWrapper = styled.div`
  width: 280px;
  margin-bottom: 30px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl}) no-repeat center;
  background-size: contain;
`;
/* Recommend */

/* writor */
export const WritorWrapper = styled.div`
  width: 278px;
`;
export const WritorToggle = styled.div`
  overflow: hidden;
  .search-left {
    font-size: 14px;
    color: #969696;
  }
  .search-right {
    float: right;
    font-size: 14px;
    color: #969696;
  }
`;
export const WritorItem = styled.div``;
export const WritorAll = styled.div``;
/* writor */
