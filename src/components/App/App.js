import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeSessionToken } from 'Utils/auth';

class App extends Component {
    logOut = () => {
        this.props.logOut();
        removeSessionToken();
    }

    render() {
        return (
            <div>
                <Link to="/cpanel">User panel</Link>
                <button onClick={this.logOut}>Log out</button>
            </div>
        )
    }
};

export default App;
