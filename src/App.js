/*
 * @Author: your name
 * @Date: 2021-03-03 16:38:25
 * @LastEditTime: 2021-03-04 22:58:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu01\src\App.js
 */

import Header from "./common/header";
import { Provider } from "react-redux"
import store from "./store"
function App() {
    return (
        <Provider store={store}>
            <Header></Header>
        </Provider>
    );
}

export default App;
