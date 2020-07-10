import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registrasi from "./pages/registrasi";
import Login from "./pages/login";
import Lupapassword from "./pages/lupapass";
import Landing from "./pages/landing";
import Notfound from "./pages/404";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/login" component={Login} />
        <Route path="/lupapass" component={Lupapassword} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}
