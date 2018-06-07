import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { loggedUser } from './loggedUser';

export default combineReducers({
    loggedUser,
    router,
});
