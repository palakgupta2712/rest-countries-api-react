import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Country from "../pages/Country";
import Home from "../pages/Home";

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Country} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Routes;
