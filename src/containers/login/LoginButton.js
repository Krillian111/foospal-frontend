import { connect } from 'react-redux';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';
import PrimaryButton from '../../components/button/PrimaryButton';

const mapStateToProps = () => ({
    label: 'Login',
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(setLoginModalVisibility(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryButton);
