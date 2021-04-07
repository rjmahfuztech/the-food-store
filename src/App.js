import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import SelectFood from './components/SelectFood/SelectFood';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/food/:byKey">
          <SelectFood />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
