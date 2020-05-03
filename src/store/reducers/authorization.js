import { SHOW_LOGIN_DIALOG } from '../actions/login/setLoginModalVisibility';

const initialState = {
    isLoginDialogVisible: false,
};

const authorization = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOGIN_DIALOG: {
            return {
                ...state,
                isLoginDialogVisible: action.isVisible,
            };
        }
        default:
            return state;
    }
};

export default authorization;
