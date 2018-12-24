import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Events from "./Components/Events";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Nav/NavBar";

import "semantic-ui-css/semantic.min.css";
// import NavBar from "./Components/Navbar";


/**
 * Uncomment the second navbar and comment the first one
 * to revert the site into stable form
 * /

/**
 * This is the component where we have React router
 */

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <div>
          <NavBar/>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/events" component={Events} />
        </div>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
