import './App.css';
import Home from './components/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import SelectFood from './components/SelectFood/SelectFood';
import Login from './components/Login/Login';
import ManageDelivery from './components/ManageDelivery/ManageDelivery';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/food/:byKey">
            <SelectFood />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/deliveryInfo">
            <ManageDelivery />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
