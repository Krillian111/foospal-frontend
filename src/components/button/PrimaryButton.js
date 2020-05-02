import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
    box-shadow: 0px 10px 14px -7px #627c85;
    border: 2px solid #35524a;
    text-shadow: 0px 1px 0px #82e8dd;
    background: linear-gradient (#e66465, #9198e5);
    background-color: #32de8a;
    padding: 8px 20px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    margin: 20px 20px;
`;

export default function PrimaryButton({ label, onClickHandler }) {
    return (
        <StyledPrimaryButton onClick={onClickHandler}>
            {label}
        </StyledPrimaryButton>
    );
}

PrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
};
