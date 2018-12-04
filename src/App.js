import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Events from "./Components/Events";
import Home from "./Components/Home";

import Navbar from "./Components/Layout/Navbar";

import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

/**
 * This is the component where we have React router
 */

const App = () => {

  return (
    <BrowserRouter>
      <Fragment>
        <Grid className = 'app' columns={2} divided>

          {/* This is the navbar component */}

          <Grid.Column className="app-navbar" width={3}>
            <Navbar />
          </Grid.Column>

          {/* Contents in the webpage */}

          <Grid.Column className="app-content" width={13}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/events" component={Events} />
          </Grid.Column>
        </Grid>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
