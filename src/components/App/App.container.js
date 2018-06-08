import { connect } from 'react-redux';
import { logOut } from 'Actions/loggedUser';
import App from './App';

export default connect(
    null,
    {
        logOut,
    }
)(App);
