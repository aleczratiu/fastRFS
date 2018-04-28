import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { REGISTER_USER_MUTATION } from '../../../../apollo/mutations';
import { setUser } from '../../../actions/loggedUser';
import Register from './Register';
import { setSessionToken } from '../../../utils/auth';

const RegisterUserData = graphql(
    REGISTER_USER_MUTATION,
    {
        props: ({ ownProps, mutate }) => ({
            async registerUser(variables) {
                try{
                    const response = await mutate({ variables });
                    const { data: { addUser: { email, updatedAt, createdAt, sessionToken } }} = response;

                    await setSessionToken(sessionToken);

                    ownProps.setUser({
                        email,
                        updatedAt,
                        createdAt
                    });
                } catch(e) {
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
        setUser: response => dispatch(setUser(response))
    })
)(RegisterUserData);
