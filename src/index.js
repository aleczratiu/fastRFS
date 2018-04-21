import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createStore } from 'redux';
import { loggedUser } from './reducers/loggedUser';
import { API } from './constants';
import Register from './components/Auth/Register';
import styles from  './styles.scss';

const client = new ApolloClient({
    link: createHttpLink({ uri: API.local }),
    cache: new InMemoryCache(),
});

const store = createStore(loggedUser, devToolsEnhancer());

const Index = () => {
    return (
        <div className={styles.test}>
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <Router>
                        <Route path="/" component={Register} />
                    </Router>
                </ApolloProvider>
            </Provider>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
