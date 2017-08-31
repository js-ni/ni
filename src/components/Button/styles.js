import styled from 'emotion/react';
import { Button as BaseButton } from 'reactstrap';

export const Button = styled(BaseButton)`
  position: relative;
`;

export const Indicator = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Text = styled.span`
  opacity: ${props => props.waiting ? 0 : 1};
`;
