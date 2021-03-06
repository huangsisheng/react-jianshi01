// export 与 import 的复合写法
// export { reducer } from "./reducer"


import reducer from "./reducer"
import * as constants from "./constants";
import * as actionCreators from "./actionCreators";
export {
    reducer,
    constants,
    actionCreators
}