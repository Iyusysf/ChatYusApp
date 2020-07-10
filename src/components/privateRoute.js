import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRote({
  component: Component,
  ...restProps
} = props) {
  const isAutenticated = true;

  return (
    <Route
      {...restProps}
      render={props => {
        return isAutenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/Login"
            }}
          />
        );
      }}
    />
  );
}
