//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./layout/home.jsx";

//render your react application
var seconds = 0;

const secondsAddAndRender = () => {
    seconds += seconds !== 999999 ? 1: 0;
    ReactDOM.render(<Home seconds={seconds}/>, document.querySelector("#app"))
}
setInterval(secondsAddAndRender,1000);


