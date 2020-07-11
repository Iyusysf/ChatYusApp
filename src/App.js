import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registrasi from "./pages/registrasi";
import Login from "./pages/login";
import Lupapassword from "./pages/lupapass";
import Landing from "./pages/landing";
import Notfound from "./pages/404";

import Private from "./pages/private";
import PrivateRoute from './components/privateRoute';
import FirebaseProvider from "./components/FirebaseProvider";
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from './config/Theme';


export default function App() {
  return (
<ThemeProvider theme={Theme}>
<FirebaseProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/registrasi" component={Registrasi} />
        <Route path="/login" component={Login} />
        <Route path="/lupapass" component={Lupapassword} />
        
        <PrivateRoute path="/chat" component={Private}/>
        <PrivateRoute path="/pengaturan" component={Private}/>
        
        <Route component={Notfound} />
      </Switch>
    </Router>
    </FirebaseProvider>
    </ThemeProvider>
  );
}
