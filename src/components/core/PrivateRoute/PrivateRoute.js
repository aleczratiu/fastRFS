import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
    name: PropTypes.string,
};

PrivateRoute.defaultProps = {
    path: '',
    name: null,
};

export default PrivateRoute;

