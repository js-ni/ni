import React from 'react';
import {Box, Flex, Heading, Text} from '@chakra-ui/core';

import bgImage from './computer.jpg';

export default function Welcome() {
  return (
    <Flex
      backgroundAttachment="fixed"
      backgroundImage={`linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url(${bgImage})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      justify="center"
      px={4}
      py={[4, 8]}
    >
      <Box color="white" maxWidth={600} textAlign="center">
        <Heading size="lg">¿Quiénes somos?</Heading>
        <Text lineHeight={1.5} mt={4}>
          Somos un grupo de desarrolladores que nos reunimos para hablar acerca
          de librerías, frameworks y todo lo relacionado a JavaScript.
        </Text>
        <Text lineHeight={1.5} mt={3}>
          Nos reunimos para socializar y comer pizza, compartimos conocimientos
          mediante charlas presenciales o vía hangouts. Creamos capital social
          para tener nuevas oportunidades de empleo.
        </Text>
      </Box>
    </Flex>
  );
}
