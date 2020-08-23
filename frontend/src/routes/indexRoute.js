import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  Account,
  Login,
  DashBoard,
  Withdraw,
  Deposit,
  Report,
  Donate,
  DashBoardHome,
  SignUp,
} from "./";

const IndexRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/account" component={Account} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={SignUp} exact />
        <DashBoard>
          <Route
            component={({ match }) => (
              <div>
                <Route path="/report" component={Report} exact />
                <Route path="/withdraw" component={Withdraw} exact />
                <Route path="/tokencenter" component={Deposit} exact />
                <Route path="/donate" component={Donate} exact />
                <Route path="/dashboard" component={DashBoardHome} exact />
              </div>
            )}
          />
        </DashBoard>
      </Switch>
    </BrowserRouter>
  );
};

export default IndexRoute;
