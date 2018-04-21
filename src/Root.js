import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Auth/Register';

const Root = () => (
    <Router>
        <Route path="/" component={Register} />
    </Router>
);

export default Root;
