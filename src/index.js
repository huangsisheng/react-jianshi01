import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import { Globalstyle } from "./style.js";
import App from "./App";

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
