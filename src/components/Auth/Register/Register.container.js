import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { push } from 'react-router-redux';
import { REGISTER_USER_MUTATION } from 'Apollo/mutations';
import { setUser } from 'Actions/loggedUser';
import { setSessionToken } from 'Utils/auth';
import { ROUTES } from 'Constants';
import Register from './Register';

const RegisterUserData = graphql(
    REGISTER_USER_MUTATION,
    {
        props: ({ ownProps, mutate }) => ({
            async registerUser(variables) {
                try {
                    const response = await mutate({ variables });
                    const { data: { registerUser: { email, updatedAt, createdAt, sessionToken } } } = response;

                    setSessionToken(sessionToken);

                    ownProps.setUser({
                        email,
                        updatedAt,
                        createdAt,
                    });

                    ownProps.redirect(ROUTES.ROOT);

                } catch (e) {
                    console.log('e', e);
                };
            }
        })
    }
)(Register);

export default connect(
    state => ({
        loggedUser: state.loggedUser,
    }),
    dispatch => ({
        redirect: path => dispatch(push(path)),
        setUser: response => dispatch(setUser(response))
    })
)(RegisterUserData);
