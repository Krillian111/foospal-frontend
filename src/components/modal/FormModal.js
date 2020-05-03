import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrimaryButton from '../button/PrimaryButton';

export const formFieldType = {
    text: 'text',
    password: 'password',
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

const StyledError = styled.div`
    color: red;
`;

export default function FormModal({
    isModalVisible,
    formFields,
    updateFieldInStore,
    error,
    cancelButton,
    submitButton,
}) {
    const keyValuePairs = {};
    Object.keys(formFields).forEach((key) => {
        keyValuePairs[key] = formFields[key].value;
    });
    const fields = Object.keys(formFields).map((key) => {
        const { type, label, value } = formFields[key];
        const onChange = updateFieldInStore[key];
        return {
            type,
            name: key,
            label,
            value,
            onChange,
        };
    });

    return (
        <StyledModalBackground isModalVisible={isModalVisible}>
            <StyledModalContent>
                {fields.map(({ type, label, name, value, onChange }) => (
                    <div key={label}>
                        <label htmlFor={label}>{label}</label>
                        <input
                            name={name}
                            type={type}
                            onChange={(event) => onChange(event.target.value)}
                            value={value}
                        />
                    </div>
                ))}
                {error.isVisible && <StyledError>{error.message}</StyledError>}
                <div>
                    <PrimaryButton
                        onClick={cancelButton.onClick}
                        label={cancelButton.label}
                    />
                    <PrimaryButton
                        onClick={() => submitButton.onClick(keyValuePairs)}
                        label={submitButton.label}
                    />
                </div>
            </StyledModalContent>
        </StyledModalBackground>
    );
}

FormModal.propTypes = {
    isModalVisible: PropTypes.bool.isRequired,
    formFields: PropTypes.objectOf(
        PropTypes.shape({
            type: PropTypes.oneOf(Object.values(formFieldType)),
            label: PropTypes.string,
            value: PropTypes.string,
        })
    ).isRequired,
    updateFieldInStore: PropTypes.objectOf(PropTypes.func).isRequired,
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
