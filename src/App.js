import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom'
import About from './Components/About'
import Organizers from './Components/Organizers'
import Events from './Components/Events'


/**
 * This is the component where we have React router
 */

class App extends Component {

  componentDidMount() {

  }

  render() {
      
    return (
        <BrowserRouter>
            <div>
                <Route exact path = '/' component = {()=>{return <div>Home</div>}}/>
                <Route path = '/about' component = {About}/>
                <Route path = '/organizers' component = {Organizers}/>
                <Route path = '/events' component = {Events}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
