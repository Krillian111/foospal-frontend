export const LOGIN_TO_BACKEND = 'LOGIN_TO_BACKEND';

export function loginToBackend(username, password) {
    return {
        type: LOGIN_TO_BACKEND,
        payload: {
            request: {
                method: 'post',
                url: '/auth/login',
                data: {
                    username,
                    password,
                },
            },
        },
    };
}
