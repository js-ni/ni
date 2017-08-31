import { keyframes } from 'emotion'
import styled from 'emotion/react';
import PropTypes from 'prop-types';

import image from './spinner.png';

const rotate360 = keyframes`
	from {
		transform: rotate(0);
	}

	to {
		transform: rotate(1turn);
	}
`;

export const Spinner = styled.span`
  display: inline-block;
  height: ${props => props.size || 50}px;
  margin: 0 auto;
  width: ${props => props.size || 50}px;

  background: url("${image}") no-repeat center center;
  background-size: cover;
  border-radius: 50%;

  animation: ${rotate360} 1s infinite linear;
  animation-direction: normal;
`;

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
