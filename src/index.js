import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import apolloClient from 'Apollo/client';
import middleware from 'Middleware';
import reducers from 'Reducers';
import initialState from './initialState.json';
import Root from './Root.container.js';

export const history = createHistory();

const store = createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(...middleware, routerMiddleware(history))
));

render(
    <ApolloProvider client={apolloClient}>
        <Provider store={store}>
            <Root history={history} />
        </Provider>
    </ApolloProvider>, document.getElementById('root')
);

export default store;
