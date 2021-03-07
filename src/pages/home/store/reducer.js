/*
 * @Author: your name
 * @Date: 2021-03-07 22:23:16
 * @LastEditTime: 2021-03-07 23:15:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-jianshi01\src\pages\home\store\reducer.js
 */
import { fromJS } from "immutable";
import { constants } from "./index";
const defaultState = fromJS({
  topicList: [
    {
      id: "1",
      src:
        "https://upload-images.jianshu.io/upload_images/1202579-0441bb93ce3e41b7?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      title: "社会热点",
    },
    {
      id: "2",
      src:
        "https://upload.jianshu.io/users/upload_avatars/16647262/f01b2631-8a54-4fa5-a6c3-104777da4627.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp",
      title: "手绘",
    },
  ],
  articleList: [
    {
      id: "1",
      src:
        "https://upload-images.jianshu.io/upload_images/19623358-47421c08e6b53b3f.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      title: "鲁迅文章频频移出课本，为何会“去鲁迅化”？余华一句话点名原因",
      desc:
        "虽然不想承认，但是鲁迅他的确对我有潜移默化的影响，我想他斐然的文笔是没有人愿意质疑的。---余华文|公众号|颜小二述哲文 大多数喜欢文学的朋友",
    },
    {
      id: "2",
      src: "",
      title: "真实故事",
      desc:
        "1992年，贾平凹的妻子发现他“精神出轨”，闹着要离婚，贾平凹不愿意，不久后，路遥去世，参加完好友的葬礼后，贾平凹毅然决定离婚，亲友都劝他三思，...",
    },
    {
      id: "3",
      src:
        "https://upload-images.jianshu.io/upload_images/23488806-8ebae730d29122c4.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      title: "戴望舒——在最美的时光里错过",
      desc:
        "【青•故事优选】[https://www.jianshu.com/c/11c8f8761ed1]专题推荐文章 01 撑着油纸伞，独自彷徨在悠长，...",
    },
  ],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.TOPIC_LITS:
      return state;
    default:
      return state;
  }
};
export default reducer;
