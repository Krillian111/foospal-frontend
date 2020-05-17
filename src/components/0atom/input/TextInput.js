import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextInput = styled.div``;

export default function TextInput({
  name,
  label,
  onChange,
  defaultValue,
  maxLength,
}) {
  return (
    <StyledTextInput>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        value={defaultValue}
        maxLength={maxLength}
        onChange={onChange}
      />
    </StyledTextInput>
  );
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  maxLength: PropTypes.number,
};

TextInput.defaultProps = {
  defaultValue: '',
  maxLength: 100,
};
