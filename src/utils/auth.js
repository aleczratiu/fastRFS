import { USER_TOKEN } from '../constants/auth';

export const setSessionToken = (sessionToken) => localStorage.setItem(USER_TOKEN, sessionToken);

export const getSessionToken = () => localStorage.getItem(USER_TOKEN);
