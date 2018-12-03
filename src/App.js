import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import jQuery from "jquery";
import { multiscroll } from "multiscroll.js"


class App extends Component {

  componentDidMount() {
    console.log( jQuery )
    jQuery('#multiscroll').multiscroll()
  }

  render() {

    return (
        <div id="multiscroll">
        <div className="ms-left">
            <div className="ms-section">Some section</div>
            <div className="ms-section">Some section</div>
            <div className="ms-section">Some section</div>
        </div>
        <div className="ms-right">
            <div className="ms-section">Some section</div>
            <div className="ms-section">Some section</div>
            <div className="ms-section">Some section</div>
        </div>
    </div>
    );
  }
}

    export default App;
