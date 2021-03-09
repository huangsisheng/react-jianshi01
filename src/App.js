/*
 * @Author: your name
 * @Date: 2021-03-03 16:38:25
 * @LastEditTime: 2021-03-09 22:39:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\App.js
 */

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
