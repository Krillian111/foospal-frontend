export const SET_USERNAME = 'SET_USERNAME';

export function setUsername(username) {
    return {
        type: SET_USERNAME,
        username,
    };
}
