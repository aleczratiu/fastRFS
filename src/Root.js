import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { removeSessionToken } from 'Utils/auth';
import PublicRoute from 'Components/core/PublicRoute';
import Register from './components/Auth/Register/Register.container';
import Login from './components/Auth/Login/Login.container';
import App from './components/App';
import PrivateRoute from './components/core/PrivateRoute';

class Root extends Component {
    componentWillReceiveProps(nextProps) {
        const { getUserBySessionToken: user, setUser } = nextProps;
        if (this.props.loading !== nextProps.loading) {
            if (!user) {
                removeSessionToken();
            } else {
                setUser(user);
            }
        }
    }

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Switch>
                    <PrivateRoute exact path='/' component={App} />
                    <PublicRoute exact path='/register' component={Register} />
                    <PublicRoute exact path='/login' component={Login} />
                    <PrivateRoute path="/admin" component={() => <h1>Admin page</h1>} />
                </Switch>
            </ConnectedRouter>
        )
    }
};

Root.propTypes = {
    loggedUser: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
};

export default Root;
