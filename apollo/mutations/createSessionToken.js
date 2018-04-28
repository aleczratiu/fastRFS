import gql from 'graphql-tag';

const CREATE_SESSION_TOKEN_MUTATION = gql`
mutation createSessionToken(
    $email: String!,
    $password: String!
  ) {
    createSessionToken(
          email: $email
          password: $password
    ) {
      id
      email,
      sessionToken,
    }
}
`;

export default CREATE_SESSION_TOKEN_MUTATION;
