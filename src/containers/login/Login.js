import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';
import { logoutFromBackend } from '../../store/actions/login/logoutFromBackend';
import { loginToBackend } from '../../store/actions/login/loginToBackend';
import ButtonTriggeredModal from '../../components/3template/ButtonTriggeredModal';
import { inputTypes } from '../../components/1molecule/form/Form';

function mapStateToProps(state) {
  return {
    toMergeIntoFormModal: {
      formFields: [
        {
          name: 'username',
          type: inputTypes.text,
          label: 'User',
        },
        {
          name: 'password',
          type: inputTypes.password,
          label: 'Password',
        },
      ],
      isModalVisible: state.authorization.isLoginDialogVisible,
      result: state.authorization.error,
    },
    refreshToken: state.authorization.refreshToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toMergeIntoFormModal: {
      submitButton: {
        label: 'Submit',
        onClick: ({ username, password }) =>
          dispatch(loginToBackend(username, password)),
      },
      cancelButton: {
        label: 'Cancel',
        onClick: () => dispatch(setLoginModalVisibility(false)),
      },
    },
    showLoginModal: () => dispatch(setLoginModalVisibility(true)),
    logout: (token) => () => dispatch(logoutFromBackend(token)),
  };
}

function mergeProps(stateProps, dispatchProps) {
  const triggerButton = {
    label: stateProps.refreshToken ? 'Logout' : 'Login',
    onClick: stateProps.refreshToken
      ? dispatchProps.logout(stateProps.refreshToken)
      : dispatchProps.showLoginModal,
    isVisible: true,
  };
  return {
    formModal: {
      ...stateProps.toMergeIntoFormModal,
      ...dispatchProps.toMergeIntoFormModal,
    },
    triggerButton,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ButtonTriggeredModal);
