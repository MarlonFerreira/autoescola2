import React from "react";
import { Route, Redirect } from "react-router-dom";

import isConnected from "./isConnected";

const CheckForHome = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isConnected() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default CheckForHome;
