import React from "react";
import { Redirect, Route } from "react-router-dom";
//import {useFirebase} from "./FirebaseProvider";
export default function privateRoute({component: Component,...restProps}= props) {
  
  const user = true;


  return (
    <Route
      {...restProps}
      render={props => {
        return user ? (
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
