import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getSessionToken } from 'Utils/auth';
import { ROUTES } from 'Constants';

const PrivateRoute = ({ component: Component, ...rest, loggedUser }) => (
    <Route
        {...rest}
        render={props => (
            getSessionToken() ?
                <Component {...props} />
                :
                <Redirect
                    to={{
                        pathname: ROUTES.LOGIN,
                        state: { from: props.path },
                    }}
                />
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

