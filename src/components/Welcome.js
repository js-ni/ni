import React, { Component } from 'react';
import styled from 'styled-components';
import computer from './computer.jpg';

class Welcome extends Component {

  // react render
  render() {
    return (
      <Features>
        <AboutTitle>¿Quiénes somos?</AboutTitle>
        <AboutText>Somos un grupo de desarrolladores que nos reunimos para hablar acerca de librerías, frameworks y todo lo relacionado a JavaScript.</AboutText>
        <AboutText>Nos reunimos para socializar y comer pizza, compartimos conocimientos mediante charlas presenciales o vía hangouts. Creamos capital social para tener nuevas oportunidades de empleo.</AboutText>
      </Features>
    );
  }
}

const Features = styled.div`
  position: relative;
  background-image: url(${computer});
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 80px 0;
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2C3E50;
    opacity: .9;
  }
`;

const AboutTitle = styled.div`
  text-align: center;
  padding: 10px 15px;
  max-width: 600px;
  position: relative;
  z-index: 99;
  color: #f1f1f1;
  margin: 0 auto;
  font-size: 36px;
  font-weight: bold;
`;

const AboutText = styled.div`
  text-align: center;
  padding: 20px 15px;
  max-width: 600px;
  position: relative;
  z-index: 99;
  color: #f1f1f1;
  margin: 0 auto;
  font-size: 1rem;
`;

export default Welcome;
