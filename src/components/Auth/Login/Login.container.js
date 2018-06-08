import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { CREATE_SESSION_TOKEN_MUTATION } from 'Apollo/mutations';
import { setUser } from 'Actions/loggedUser';
import { setSessionToken } from 'Utils/auth';
import { ROUTES } from 'Constants';
import { push } from 'react-router-redux';
import Login from './Login';

const LoginUserWithData = graphql(
    CREATE_SESSION_TOKEN_MUTATION,
    {
        props: ({ ownProps, mutate }) => ({
            async createSessionToken(variables) {
                try {
                    const { data: { createSessionToken: { id, email, sessionToken } } } = await mutate({ variables });

                    setSessionToken(sessionToken);

                    ownProps.setUser({
                        id,
                        email
                    });

                    ownProps.redirect(ROUTES.ROOT);

                } catch (e) {
                    console.log('e', e);
                }
            }
        })
    }
)(Login);

export default connect(
    state => ({
        loggedUser: state.loggedUser,
    }),
    dispatch => ({
        redirect: path => dispatch(push(path)),
        setUser: response => dispatch(setUser(response))
    })
)(LoginUserWithData);
