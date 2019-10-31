import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Home from './components/Home'
import Scg from './components/Scg'

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Switch>
            <Route path="/SCG">
              <Scg />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      
    </div>
  );
}

export default App;
