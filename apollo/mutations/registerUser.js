import gql from 'graphql-tag';

const REGISTER_USER_MUTATION = gql`
    mutation RegisterUser(
        $email: String!,
        $password: String!,
        $updatedAt: String!,
        $createdAt: String!,
    ) {
        addUser(
            email: $email,
            password: $password
            updatedAt: $updatedAt
            createdAt: $createdAt
        ) {
            email,
            updatedAt,
            createdAt,
            sessionToken
        }
    }
`;

export default REGISTER_USER_MUTATION;
