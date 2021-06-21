// importing the react library
import React from "react";
// importing the react-dom library - so pages can be rendered
import ReactDOM from "react-dom";
// importing contents from the App file
import App from "./App";
// for bootstrap refactor
// import "bootstrap/dist/css/bootstrap.min.css";

// import Home from "../src/components/Home/Home";
// import NavBar from "../src/components/NavBar/NavBar";
// import Footer from "../src/components/Footer/Footer";

//rendering the JSX by calling the <App /> function
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // selecting from the root element in index.html where everything will be processed
  document.getElementById("root")
);

// ReactDOM.render(<NavBar />, document.getElementById("navbar"));
// ReactDOM.render(<Home />, document.getElementById("home"));
// ReactDOM.render(<Footer />, document.getElementById("footer"));
