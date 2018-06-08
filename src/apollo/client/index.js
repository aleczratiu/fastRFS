import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getSessionToken, removeSessionToken } from 'Utils/auth';
import { history } from '../../index';
import { ROUTES, ERROR_CODES } from 'Constants';
import config from 'Config';

// redirect if token has expired
const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors && graphQLErrors.find(err => err && err.data && err.data.status === ERROR_CODES.UNAUTHORIZED)) {
        removeSessionToken();
        history.replace(`${ROUTES.LOGIN}`);
    }
});

const httpLink = createHttpLink({
    uri: config.api,
    credentials: 'same-origin',
});

// middleware
const setAuthorization = setContext(() => ({
    headers: {
        authorization: getSessionToken() || null,
    },
}));

const link = ApolloLink.from([
    errorLink,
    setAuthorization,
    httpLink,
]);

const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default apolloClient;
