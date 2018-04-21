import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import PrivateRoute from './components/core/PrivateRoute/PrivateRoute.container';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={() => <h1>HomePage</h1>} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
        </Switch>
    </Router>
);

export default Root;
