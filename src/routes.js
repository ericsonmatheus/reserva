import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Main from "./pages";
import Login from "./pages/login";
import Reserve from "./pages/reserve"

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" element={<Main/>}/>
                <Route path="/logon" element={<Login />}/>
                <Route path="/reserve" element={<Reserve />}/>
            </Switch>
        </Router>
    );
}


export default Routes;
