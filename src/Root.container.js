import { connect } from 'react-redux';
import Root from './Root';

export default connect(
    state => ({
        loggedUser: state.loggedUser
    }),
    {}
)(Root);