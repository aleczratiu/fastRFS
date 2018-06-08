import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { GET_USER_BY_SESSION_TOKEN } from 'Apollo/queries';
import { getSessionToken } from 'Utils/auth';
import { setUser } from 'Actions/loggedUser';
import Root from './Root';

const sessionToken = getSessionToken();

const RootWithData = graphql(
    GET_USER_BY_SESSION_TOKEN,
    {
        options: {
            variables: {
                sessionToken,
            },
        },
        skip: !sessionToken,
        props: ({ data }) => data,
    },
)(Root);

export default connect(
    state => ({
        loggedUser: state.loggedUser,
    }),
    dispatch => ({
        setUser: user => dispatch(setUser(user)),
    })
)(RootWithData);
