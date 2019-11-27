import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// serviceWorker.unregister();
