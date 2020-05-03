import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const formFieldType = {
    text: 'text',
};

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

export default function FormModal({
    isModalVisible,
    formFields,
    submitButton,
}) {
    return (
        <StyledModalBackground isModalVisible={isModalVisible}>
            <StyledModalContent>
                {formFields.map(({ type, label }) => (
                    <div key={label}>
                        <label htmlFor={label}>{label}</label>
                        <input name={label} type={type} />
                    </div>
                ))}
                <button onClick={submitButton.onClickHandler} type="button">
                    {submitButton.label}
                </button>
            </StyledModalContent>
        </StyledModalBackground>
    );
}

FormModal.propTypes = {
    isModalVisible: PropTypes.bool.isRequired,
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(Object.values(formFieldType)),
            label: PropTypes.string,
        })
    ).isRequired,
    submitButton: PropTypes.shape({
        label: PropTypes.string,
        onClickHandler: PropTypes.func,
    }).isRequired,
};
