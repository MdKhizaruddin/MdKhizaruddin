import React from "react";
import { Home } from "./Home";
import { NavigationBar } from "./NavigationBar";
import { Courses } from "./Courses";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import { Services } from "./Services";
import { Help } from "./Help";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Routing = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <div>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Courses">
              <Courses />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Help">
              <Help />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};
