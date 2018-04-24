import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { REGISTER_USER_MUTATION } from '../../../../apollo/mutations';
import { setUser } from '../../../actions/loggedUser';
import Register from './Register';

const RegisterUserData = graphql(
    REGISTER_USER_MUTATION,
    {
        props: ({ ownProps, mutate }) => ({
            async registerUser(variables) {
                try{
                    const response = await mutate({ variables });
                    const { addUser: { email, updatedAt, createdAt } } = response.data;

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
