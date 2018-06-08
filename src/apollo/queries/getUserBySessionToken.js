import gql from 'graphql-tag';

const GET_USER_BY_SESSION_TOKEN = gql`
    query getUserBySessionToken(
        $sessionToken: String!,
    ) {
        getUserBySessionToken(
            sessionToken: $sessionToken,
        ) {
            id
            firstName
            lastName
            email
            createdAt
            updatedAt
        }
    }
`
export default GET_USER_BY_SESSION_TOKEN;
