import React from "react";
import { Route } from "react-router-dom";

export default function PrivateRoute({children, ...rest}) {
  // const {children} = props;
  return(
    <Route 
      {...rest}
      render={(props) => children}
    />
  )
}