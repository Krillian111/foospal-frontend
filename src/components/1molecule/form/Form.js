import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrimaryButton from '../../0atom/button/PrimaryButton';

const StyledForm = styled.div``;

export const inputTypes = {
  text: 'text',
  number: 'number',
  password: 'password',
};

function getDefaultValue(type) {
  switch (type) {
    case 'text':
    case 'password':
      return '';
    case 'number':
      return 0;
    default:
      throw new Error(`no default value configured for type ${type}`);
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    const formValues = {};
    const { formFields } = this.props;
    formFields.forEach((formField) => {
      formValues[formField.name] =
        formField.defaultValue || getDefaultValue(formField.type);
    });
    if (Object.keys(formValues).length !== formFields.length) {
      throw new Error('input name seems not to be unique!');
    }
    this.state = { formValues };
  }

  render() {
    const { formFields, submit, cancel } = this.props;
    const { formValues } = this.state;
    return (
      <StyledForm>
        {formFields.map(
          ({ type, name, label, minValue = 0, maxValue, maxLength = 100 }) => {
            const onChange = (newValueForName) =>
              this.setState((prevState) => ({
                formValues: {
                  ...prevState.formValues,
                  [name]: newValueForName,
                },
              }));
            return (
              <div key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  name={name}
                  onChange={(event) => onChange(event.target.value)}
                  min={minValue}
                  max={maxValue}
                  maxLength={maxLength}
                  value={formValues[name]}
                />
              </div>
            );
          }
        )}
        <div>
          {cancel && (
            <PrimaryButton onClick={cancel.onClick} label={cancel.label} />
          )}
          <PrimaryButton
            onClick={() => submit.onClick(formValues)}
            label={submit.label}
          />
        </div>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(inputTypes)),
      minValue: PropTypes.number,
      maxValue: PropTypes.number,
      maxLength: PropTypes.number,
      defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  submit: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
  cancel: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

Form.defaultProps = {
  cancel: undefined,
};
