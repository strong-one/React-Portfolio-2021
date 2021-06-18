// importing the react library
import React from "react";
// importing the react-dom library - so pages can be rendered
import ReactDOM from "react-dom";
// importing contents from the App file
import App from "./App";
// for bootstrap refactor
// import "bootstrap/dist/css/bootstrap.min.css";

//rendering the JSX by calling the <App /> function
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // selecting from the root element in index.html where everything will be processed
  document.getElementById("root")
);
