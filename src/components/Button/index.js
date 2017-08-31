import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Spinner from '../Spinner';

import { Button as StyledButton, Indicator, Text } from './styles';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    waiting: PropTypes.bool,
  }

  static defaultProps = {
    waiting: false,
  }

  onClick = (e) => {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(e)
    }
  };

  render() {
    const { children, className, waiting, ...rest } = this.props;
    let spinner = null;

    rest.disabled = rest.disabled || waiting;

    if (waiting) {
      spinner = (
        <Indicator>
          <Spinner size={24} />
        </Indicator>
      );
    }

    return (
      <StyledButton
        className={className}
        {...rest}
      >
        <Text waiting={waiting}>{children}</Text>
        {spinner}
      </StyledButton>
    );
  }
}

export default Button;
