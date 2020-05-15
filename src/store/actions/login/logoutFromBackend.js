export const LOGOUT_FROM_BACKEND = 'LOGOUT_FROM_BACKEND';

export function logoutFromBackend(refreshToken) {
    return {
        type: LOGOUT_FROM_BACKEND,
        payload: {
            request: {
                method: 'post',
                url: '/auth/logout',
                data: {
                    token: refreshToken,
                },
            },
        },
    };
}
