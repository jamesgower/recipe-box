import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <div>
                <Component {...props} />
            </div>
        ) 
    )}/>
);

const mapStateToProps = (state) => ({
    //!! changes from true & undefined to true and false values
    isAuthenticated: !!state.auth
});

export default connect(mapStateToProps)(PublicRoute);