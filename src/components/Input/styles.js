import styled from 'react-emotion';

export const Wrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: 48px;
  margin-bottom: 8px;
  margin-top: 16px;

  position: relative;

  &:after {
    content: "";
    height: 1px;
    width: 100%;

    bottom: 0;
    left: 0;
    position: absolute;

    background-color: ${props => props.focus ? '#212121' : props.hasError ? '#d50000' : 'rgba(0, 0, 0, .12)'};

    transform-origin: center bottom;
    transform: ${props => props.focus ? 'translateY(100%) scaleY(2)' : 'none'};
    transition-duration: 180ms;
    transition-property: background-color, transform;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  }
`;

export const Input = styled.input`
  border: none;
  line-height: normal;
  padding: 0 0 8px;
  width: 100%;

  outline: none;
`;

export const Label = styled.label`
  line-height: normal;
  margin: 0;
  width: 100%;

  bottom: 8px;
  left: 0;
  position: absolute;

  color: ${props => props.float ? '#212121' : props.hasError ? '#d50000' : 'rgba(0, 0, 0, .38)'};
  pointer-events: none;

  transform-origin: left top;
  transform: ${props => props.float ? 'scale(0.75, 0.75) translateY(-130%)' : 'none'};
  transition-duration: 180ms;
  transition-property: color, transform;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
`;

export const ErrorMessage = styled.div`
  line-height: 12px;

  font-size: 12px;

  color: #d50000;
`;
