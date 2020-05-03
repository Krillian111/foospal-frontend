import { connect } from 'react-redux';
import FormModal, { formFieldType } from '../../components/modal/FormModal';
import { setLoginModalVisibility } from '../../store/actions/login/setLoginModalVisibility';

const mapStateToProps = (state) => ({
    isModalVisible: state.authorization.isLoginDialogVisible,
});

const mapDispatchToProps = (dispatch) => ({
    formFields: [
        {
            type: formFieldType.text,
            label: 'User',
        },
        {
            type: formFieldType.text,
            label: 'Password',
        },
    ],
    submitButton: {
        label: 'Submit',
        onClickHandler: () => dispatch(setLoginModalVisibility(false)),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
