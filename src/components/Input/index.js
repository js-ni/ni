import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import {
  Bar,
  ErrorMessage,
  Input as InputStyled,
  Label,
  Wrapper
} from './styles';

class Input extends PureComponent {
  static propTypes = {
    errorMessage: PropTypes.string,
    id: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    label: null
  }

  state = {
    focus: false
  }

  onBlur = () => {
    this.setState({
      focus: false
    });
  }

  onFocus = () => {
    this.setState({
      focus: true
    });
  }

  render() {
    let message = null;
    const {
      errorMessage,
      id,
      label,
      onChange,
      value,
      ...props
    } = this.props;

    const hasError = !!errorMessage;

    if (errorMessage && hasError) {
      message = (<ErrorMessage>{errorMessage}</ErrorMessage>);
    }

    return (
      <div>
        <Wrapper>
          <InputStyled
            id={id}
            onBlur={this.onBlur}
            onChange={onChange}
            onFocus={this.onFocus}
            value={value}
            {...props}
          />
          <Label
            float={value !== '' || this.state.focus}
            hasError={hasError}
            htmlFor={id}
          >
            {label}
          </Label>
          <Bar focus={this.state.focus} hasError={hasError} />
        </Wrapper>
        {message}
      </div>
    );
  }
}

export default Input;
