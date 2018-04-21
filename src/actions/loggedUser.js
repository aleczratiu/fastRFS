import { LOGGED_USER } from './constants';

export const setUser = loggedUser => ({
    type: LOGGED_USER.SET_USER,
    payload: loggedUser,
})
