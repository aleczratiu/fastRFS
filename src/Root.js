import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import PrivateRoute from './components/core/PrivateRoute';

class Root extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={() => <h1>HomePage</h1>} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <PrivateRoute loggedUser={this.props.loggedUser} path="/admin" component={() => <h1>Admin page</h1>} />
                </Switch>
            </Router>
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
