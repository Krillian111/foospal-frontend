import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';
import { loginToBackend } from '../../store/actions/login/loginToBackend';
import FormModal from '../../components/2organism/modal/FormModal';
import { inputTypes } from '../../components/1molecule/form/Form';

const mapStateToProps = (state) => ({
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
  error: {
    isVisible: state.authorization.isLoginErrorVisible,
    message: 'Login failed, please try again!',
  },
});

const mapDispatchToProps = (dispatch) => ({
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
