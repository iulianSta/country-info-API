// Import React and ReactDOM from "react"
import React from "react";
import ReactDOM from "react-dom";
// Import App
import App from "./App";
// Import SASS
import "./sass/main.scss";

// ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
