import { LOGGED_USER } from '../actions/constants';

export const loggedUser = (state = {}, action) => {
    switch(action.type) {
    case LOGGED_USER.SET_USER:
    return { ...state, ...action.payload };

    case LOGGED_USER.LOG_OUT:
        return {};

    default:
        return state;
    }
};
