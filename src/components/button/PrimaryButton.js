import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  background-color: lightcoral;
`

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
}