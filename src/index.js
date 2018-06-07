import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import apolloClient from '../src/apollo/client';
import middleware from './middleware';
import reducers from './reducers';
import initialState from './initialState.json';
import Root from './Root.container.js';

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

render(
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
                <Root />
        </Provider>
    </ApolloProvider>, 
    document.getElementById('root')
);

export default store;
