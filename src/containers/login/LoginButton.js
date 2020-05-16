import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';
import { logoutFromBackend } from '../../store/actions/login/logoutFromBackend';
import PrimaryButton from '../../components/0atom/button/PrimaryButton';

function mapStateToProps(state) {
  return {
    refreshToken: state.authorization.refreshToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showLoginModal: () => dispatch(setLoginModalVisibility(true)),
    logout: (token) => () => dispatch(logoutFromBackend(token)),
  };
}

function mergeProps(stateProps, dispatchProps) {
  const label = stateProps.refreshToken ? 'Logout' : 'Login';
  const onClick = stateProps.refreshToken
    ? dispatchProps.logout(stateProps.refreshToken)
    : dispatchProps.showLoginModal;
  return {
    label,
    onClick,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PrimaryButton);
