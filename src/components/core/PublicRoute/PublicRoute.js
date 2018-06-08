import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { getSessionToken } from 'Utils/auth';
import { ROUTES } from 'Constants';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            !getSessionToken() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: ROUTES.ROOT,
                            state: { from: props.path },
                        }}
                    />
                )
        )}
    />
);

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
};

PublicRoute.defaultProps = {
    path: '',
};

export default PublicRoute;
