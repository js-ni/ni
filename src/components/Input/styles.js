import styled from 'emotion/react';

export const Wrapper = styled.div`
  padding-top: 24px;

  position: relative;
`;

export const Input = styled.input`
  border: none;
  display: block;
  height: 24px;
  line-height: 24px;
  padding: 0;
  width: 100%;

  font-size: 14px;

  outline: none;
`;

export const Label = styled.label`
  line-height: normal;
  margin: 0;
  width: 100%;

  bottom: 5px;
  left: 0;
  position: absolute;

  font-size: 14px;

  color: ${props => props.float && props.hasError ? '#d50000' : 'rgba(0, 0, 0, .35)' };
  pointer-events: none;
  transform: ${props => props.float ? 'scale(.75) translateY(-39px)' : 'none'};
  transform-origin: bottom left;

  transition-duration: .3s;
  transition-property: bottom, color, transform;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
`;

export const Bar = styled.div`
  display: block;
  height: 1px;
  width: 100%;

  position: relative;

  background-color: rgba(0, 0, 0, .12);

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: ${props => props.focus ? '50%' : 0 };

    bottom: 0;
    position: absolute;

    background: ${props => props.hasError ? '#d50000' : '#4285f4' };

    transition: all 0.3s cubic-bezier(.4, 0, .2, 1);
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;

  font-size: 12px;

  color: #d50000;
`;
