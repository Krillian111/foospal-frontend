export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';

export const setLoginModalVisibility = (isVisible) => ({
    type: SHOW_LOGIN_DIALOG,
    isVisible,
});
