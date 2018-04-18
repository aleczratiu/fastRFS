import React from 'react';
import ReactDOM from 'react-dom';
import styles from  './styles.scss';

const Index = () => {
    return (
        <div className={styles.test}>
            <h1>
                Wellcome in React
            </h1>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

