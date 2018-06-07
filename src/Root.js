import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Register from './components/Auth/Register/Register.container';
import Login from './components/Auth/Login/Login.container';
import PrivateRoute from './components/core/PrivateRoute';
import App from './components/App';

class Root extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute loggedUser={this.props.loggedUser} path="/admin" component={() => <h1>Admin page</h1>} />
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
