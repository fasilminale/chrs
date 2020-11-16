import React, { Component } from "react";

import Header from "./Include/Header/Header.jsx";
import Footer from "./Include/Footer/Footer.jsx";

import Signup from "./Pages/Signup/Signup.jsx";
import Signin from "./Pages/Signin/Signin.jsx";

import Search from "./View/Search/Search.jsx";

import Hotel_from from "./View/Hotel/Hotel_Form.jsx";

import Rooms from './View/Room/Rooms';

import Error from "./Pages/Page_404/Error.jsx";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />

          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />

          <Route path="/hotel_form" component={Hotel_from} />

          <Route pathe="/rooms" component={Rooms} />

          <Route component={Error} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
