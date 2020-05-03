import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
    background-color: lightcoral;
`;

export default function PrimaryButton({ label, onClick }) {
    return <StyledPrimaryButton onClick={onClick}>{label}</StyledPrimaryButton>;
}

PrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
