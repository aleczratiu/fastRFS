import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from  './styles.scss';
import Register from './components/Auth/Register';

const Index = () => {
    return (
        <div className={styles.test}>
            <Router>
                <Route path="/" component={Register} />
            </Router>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

