import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';
import PrimaryButton from '../../components/0atom/button/PrimaryButton';

const mapDispatchToProps = (dispatch) => ({
    label: 'Login',
    onClick: () => dispatch(setLoginModalVisibility(true)),
});

export default connect(null, mapDispatchToProps)(PrimaryButton);
