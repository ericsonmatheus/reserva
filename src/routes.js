import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Main from "./pages";
import Login from "./pages/login";
import Reserve from "./pages/reserve";
import MyReserve from "./pages/myReserve";
import Hour from "./pages/hour";

function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" element={<Main/>}/>
                <Route path="/logon" element={<Login />}/>
                <Route path="/reserve" element={<Reserve />}/>
                <Route path="/reserve/hour" element={<Hour />}/>
                <Route path="/myreserves" element={<MyReserve />}/>
            </Switch>
        </Router>
    );
}


export default Routes;
