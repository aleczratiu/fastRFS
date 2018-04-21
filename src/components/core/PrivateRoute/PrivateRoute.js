import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest, loggedUser }) => (
    <Route
        {...rest}
        render={props => (
            loggedUser.email !== null && loggedUser.email !== '' ?
                <Component {...props} />
            :
                <Redirect to="/" />
        )}
    />
);

export default PrivateRoute;

