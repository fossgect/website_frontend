import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

class App extends Component {



  componentDidMount() {

    $('div.top').click(function() {

      $('html, body').animate({
        scrollTop: $("div.middle").offset().top
      }, 1000)
    })

    $('div.middle').click(function (){
      $('html, body').animate({
        scrollTop: $("div.bottom").offset().top
      }, 1000)
    })

    $('div.bottom').click(function (){
      $('html, body').animate({
        scrollTop: $("div.top").offset().top
      }, 1000)
    })

    $('div.top').on('scroll', function() {

      console.log('hee')
    })
  }

  render() {
    console.log($);

    return (
      <Fragment>
        <div style = {{height:'100vh'}} className="top">
          <h1>Top</h1>
        </div>
        <div style = {{height:'100vh'}} className="middle">
          <h1>Middle</h1>
        </div>
        <div style = {{height:'100vh'}} className="bottom">
          <h1>Bottom</h1>
        </div>
      </Fragment>
    );
  }
}

export default App;
