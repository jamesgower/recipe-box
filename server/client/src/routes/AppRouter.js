import React from 'react';
import {Router, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

class AppRouter extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={Landing} exact={true}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(AppRouter);
