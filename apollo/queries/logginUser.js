import gql from 'graphql-tag';

const LOGGIN_USER_QUERY = gql`
query getUser(
    $email: String!,
    $password: String!,
  ) {
    getUser(
          email: $email,
      password: $password,
    ) {
      email
    }
}
`;

export default LOGGIN_USER_QUERY;
