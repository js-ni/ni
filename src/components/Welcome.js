import React from 'react';
import styled from 'styled-components';
import {Box, Heading, Text} from 'rebass';

import bgImage from './computer.jpg';

const Container = styled.div`
  position: relative;

  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;

  &:before {
    content: '';

    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;

    background-color: rgba(44, 62, 80, 0.9);
  }
`;

function Welcome() {
  return (
    <Container>
      <Box
        color="#f1f1f1"
        py={5}
        css={{
          margin: '0 auto',
          maxWidth: '600px',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Heading fontSize={5}>¿Quiénes somos?</Heading>
        <Text fontSize={2} lineHeight={1.5} mt={4}>
          Somos un grupo de desarrolladores que nos reunimos para hablar acerca
          de librerías, frameworks y todo lo relacionado a JavaScript.
        </Text>
        <Text fontSize={2} lineHeight={1.5} mt={3}>
          Nos reunimos para socializar y comer pizza, compartimos conocimientos
          mediante charlas presenciales o vía hangouts. Creamos capital social
          para tener nuevas oportunidades de empleo.
        </Text>
      </Box>
    </Container>
  );
}

export default Welcome;
