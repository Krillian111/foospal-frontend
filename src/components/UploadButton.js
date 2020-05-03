import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrimaryButton from './button/PrimaryButton';

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

function UploadButton({ onChangeIdConsumer }) {
    const csvInputId = 'csv-input-id';
    return (
        <StyledButtonWrapper>
            <PrimaryButton label="Upload csv-File" onClickHandler={() => {}} />
            <input
                type="file"
                id={csvInputId}
                onChange={() => onChangeIdConsumer(csvInputId)}
            />
        </StyledButtonWrapper>
    );
}

UploadButton.propTypes = {
    onChangeIdConsumer: PropTypes.func.isRequired,
};

export default UploadButton;
