//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./layout/home.jsx";

//render your react application
var seconds = 0;
var timer = true;

const secondsAddAndRender = () => {
    seconds += seconds !== 999999 ? 1: 0;
    ReactDOM.render(<Home seconds={seconds} pauseCounter={pauseCounter} resumeCounter={resumeCounter} resetCounter={resetCounter}/>, document.querySelector("#app"))
}

const pauseCounter = () => {
    clearInterval(intervalID)
    timer = false;
    ReactDOM.render(<Home seconds={seconds} pauseCounter={pauseCounter} resumeCounter={resumeCounter} resetCounter={resetCounter}/>, document.querySelector('#app')) 
}

const resumeCounter = () => {
    if (timer === false) {
        intervalID = setInterval(secondsAddAndRender,1000);
        timer = true;
    }
}

const resetCounter = () => {
    seconds = 0
    clearInterval(intervalID)
    timer = false;
    ReactDOM.render(<Home seconds={seconds} pauseCounter={pauseCounter} resumeCounter={resumeCounter} resetCounter={resetCounter}/>, document.querySelector('#app'))
}

var intervalID = setInterval(secondsAddAndRender,1000);


