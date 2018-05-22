import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Landing} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
