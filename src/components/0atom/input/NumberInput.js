import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextInput = styled.div``;

export default function NumberInput({
  name,
  label,
  onChange,
  defaultValue,
  minValue,
  maxValue,
}) {
  return (
    <StyledTextInput>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        value={defaultValue}
        min={minValue}
        max={maxValue}
        onChange={onChange}
      />
    </StyledTextInput>
  );
}

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

NumberInput.defaultProps = {
  defaultValue: '',
  minValue: 0,
  maxValue: 5,
};
