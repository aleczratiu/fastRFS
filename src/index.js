import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from './middleware';
import reducers from './reducers';
import { API } from './constants';
import { getSessionToken } from './utils/auth';
import initialState from './initialState.json';
import Root from './Root.container.js';

const httpLink = createHttpLink({
    uri: 'http://localhost:4004/'
});

const setAuthorization = setContext(() => ({
    headers: {
        authorization: getSessionToken(),
    }
  }));

const client = new ApolloClient({
    link: setAuthorization.concat(httpLink),
    cache: new InMemoryCache(),
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

const Index = () => {
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Root />
            </ApolloProvider>
        </Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
