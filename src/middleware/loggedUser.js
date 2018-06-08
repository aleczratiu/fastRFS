import { LOGGED_USER } from '../actions/constants';

export default ({ getState }) => next => action => {
    switch (action.type) {
        case LOGGED_USER.SET_USER: {
            const state = getState();
            next(action);
        }
        default:
            next(action);
    }
};
