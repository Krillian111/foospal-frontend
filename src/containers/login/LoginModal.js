import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';
import { loginToBackend } from '../../store/actions/login/loginToBackend';
import { setUsername } from '../../store/actions/login/setUsername';
import { setPassword } from '../../store/actions/login/setPassword';
import FormModal, {
    formFieldType,
} from '../../components/1molecule/modal/FormModal';

const mapStateToProps = (state) => ({
    formFields: {
        username: {
            type: formFieldType.text,
            label: 'User',
            value: state.authorization.username,
        },
        password: {
            type: formFieldType.password,
            label: 'Password',
            value: state.authorization.password,
        },
    },
    isModalVisible: state.authorization.isLoginDialogVisible,
    error: {
        isVisible: state.authorization.isLoginErrorVisible,
        message: 'Login failed, please try again!',
    },
});

const mapDispatchToProps = (dispatch) => ({
    updateFieldInStore: {
        username: (newUsername) => dispatch(setUsername(newUsername)),
        password: (newPassword) => dispatch(setPassword(newPassword)),
    },
    submitButton: {
        label: 'Submit',
        onClick: ({ username, password }) =>
            dispatch(loginToBackend(username, password)),
    },
    cancelButton: {
        label: 'Cancel',
        onClick: () => dispatch(setLoginModalVisibility(false)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
