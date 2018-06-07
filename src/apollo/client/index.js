import React from 'react';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from 'Config';
import { getSessionToken } from 'Utils/auth';

const httpLink = createHttpLink({
    uri: config.api,
    credentials: 'same-origin',
});

const setAuthorization = setContext(() => ({
    headers: {
        authorization: getSessionToken(),
    }
}));

const apolloClient = new ApolloClient({
    link: setAuthorization.concat(httpLink),
    cache: new InMemoryCache(),
});

export default apolloClient;
