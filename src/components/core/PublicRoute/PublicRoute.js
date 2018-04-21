import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest, loggedUser }) => (
    <Route
        {...rest}
        render={props => (
            loggedUser.email !== null && loggedUser.email !== '' ?
                <Redirect to='/' />
            :
                <Component {...props} />
        )}
    />
);
