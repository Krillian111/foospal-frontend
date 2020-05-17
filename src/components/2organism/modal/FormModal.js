import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from '../../1molecule/form/Form';

const StyledModalBackground = styled.div`
  display: ${(props) => (props.isModalVisible ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

const StyledError = styled.div`
  color: red;
`;

export default function FormModal({
  isModalVisible,
  formFields,
  error,
  cancelButton,
  submitButton,
}) {
  return (
    <StyledModalBackground isModalVisible={isModalVisible}>
      <StyledModalContent>
        <Form
          formFields={formFields}
          cancel={cancelButton}
          submit={submitButton}
        />
        {error.isVisible && <StyledError>{error.message}</StyledError>}
      </StyledModalContent>
    </StyledModalBackground>
  );
}

FormModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  error: PropTypes.shape({
    isVisible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
  submitButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
  cancelButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
};
