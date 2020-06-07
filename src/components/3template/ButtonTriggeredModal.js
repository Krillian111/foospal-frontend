import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormModal from '../2organism/modal/FormModal';
import PrimaryButton from '../0atom/button/PrimaryButton';

const StyledModalAndButtonWrapper = styled.div``;

export default function ButtonTriggeredModal({ triggerButton, formModal }) {
  const { label, onClick, isVisible } = triggerButton;
  const {
    isModalVisible,
    formFields,
    result,
    cancelButton,
    submitButton,
  } = formModal;

  return (
    <StyledModalAndButtonWrapper>
      {isVisible && <PrimaryButton label={label} onClick={onClick} />}
      <FormModal
        isModalVisible={isModalVisible}
        formFields={formFields}
        result={result}
        cancelButton={cancelButton}
        submitButton={submitButton}
      />
    </StyledModalAndButtonWrapper>
  );
}

ButtonTriggeredModal.propTypes = {
  triggerButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    isVisible: PropTypes.bool,
  }).isRequired,
  formModal: PropTypes.shape({
    isModalVisible: PropTypes.bool,
    formFields: PropTypes.arrayOf(PropTypes.shape({})),
    result: PropTypes.string,
    submitButton: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
    cancelButton: PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
  }).isRequired,
};
