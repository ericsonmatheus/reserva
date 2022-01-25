import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Main from "./pages";
import Login from "./pages/login";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" element={<Main/>}/>
                <Route path="/logon" element={<Login />}/>
            </Switch>
        </Router>
    );
}


export default Routes;
