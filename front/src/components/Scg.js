import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home'
import Formula from './Formula'
import Place from './Place'

function Scg() {
  return (
    <Router>
        <div>
        <Switch>
            <Route path="/SCG/Formula">
                <Formula />
            </Route>
            <Route path="/SCG/Place">
                <Place />
            </Route>
            <Route path="/SCG">
                <Home />
            </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default Scg;