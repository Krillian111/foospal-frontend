import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;

    input[type='file'] {
        font-size: 100px;
        position: absolute;
        left: 0px;
        top: 0;
        opacity: 0;
        cursor: pointer;
    }
`;

const StyledUploadButton = styled.button`
    box-shadow: 0px 10px 14px -7px #276873;
    border: 4px solid #805964;
    color: #805964;
    text-shadow: 0px 1px 0px #8dbe85;
    background: linear-gradient (#e66465, #9198e5);
    background-color: A8FC97;
    padding: 8px 20px;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 500;
    margin: 20px 20px;
`;

const UploadButton = ({ onChangeIdConsumer }) => {
    const csvInputId = 'csv-input-id';
    return (
        <StyledButtonWrapper>
            <StyledUploadButton>Upload csv-File</StyledUploadButton>
            <input
                type="file"
                id={csvInputId}
                onChange={() => onChangeIdConsumer(csvInputId)}
            />
        </StyledButtonWrapper>
    );
};

UploadButton.propTypes = {
    onChangeIdConsumer: PropTypes.func.isRequired,
};

export default UploadButton;
