import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest, loggedUser }) => (
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

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string,
    name: PropTypes.string,
};

PublicRoute.defaultProps = {
    path: '',
    name: null,
};

export default PublicRoute;
