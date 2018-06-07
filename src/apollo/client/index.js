import React from 'react';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getSessionToken } from '../../utils/auth';

const httpLink = createHttpLink({
    uri: 'http://localhost:4004/'
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
