import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Auth from "./service/auth";

const auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>,
  document.getElementById("root")
);
