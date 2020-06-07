import { connect } from 'react-redux';
import { setAddGameVisibility } from '../../store/actions/games/setAddGameVisibility';
import { addNewGame } from '../../store/actions/games/addNewGame';
import ButtonTriggeredModal from '../../components/3template/ButtonTriggeredModal';
import { inputTypes } from '../../components/1molecule/form/Form';

function mapStateToProps(state) {
  return {
    toMergeIntoFormModal: {
      formFields: [
        {
          name: 'playerA',
          type: inputTypes.text,
          label: 'Player (A)',
        },
        {
          name: 'playerB',
          type: inputTypes.text,
          label: 'Player (B)',
        },
        {
          name: 'scoreA',
          type: inputTypes.number,
          label: 'Score (A)',
          defaultValue: 0,
          minValue: 0,
          maxValue: 5,
        },
        {
          name: 'scoreB',
          type: inputTypes.number,
          label: 'Score (B)',
          defaultValue: 0,
          minValue: 0,
          maxValue: 5,
        },
        {
          name: 'playedOn',
          type: inputTypes.text,
          label: 'Date',
          defaultValue: new Date().toISOString(),
        },
      ],
      isModalVisible: state.games.isAddGameVisible,
      result: state.games.error || state.games.success,
    },
    accessToken: state.authorization.accessToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toMergeIntoFormModal: {
      cancelButton: {
        label: 'Cancel',
        onClick: () => dispatch(setAddGameVisibility(false)),
      },
    },
    setAddGameToVisible: () => dispatch(setAddGameVisibility(true)),
    submitButtonOnClick: (accessToken) => (game) =>
      dispatch(addNewGame(game, accessToken)),
  };
}

function mergeProps(stateProps, dispatchProps) {
  const triggerButton = {
    label: 'Add game',
    onClick: dispatchProps.setAddGameToVisible,
    isVisible: Boolean(stateProps.accessToken),
  };
  return {
    formModal: {
      ...stateProps.toMergeIntoFormModal,
      ...dispatchProps.toMergeIntoFormModal,
      submitButton: {
        label: 'Submit',
        onClick: dispatchProps.submitButtonOnClick(stateProps.accessToken),
      },
    },
    triggerButton,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ButtonTriggeredModal);
