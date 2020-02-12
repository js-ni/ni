import React from 'react';
import {For} from 'react-loops';
import {Box, Grid, Heading} from '@chakra-ui/core';

import bgImage from './event.jpg';
import events from './events.json';
import Container from 'components/Container';
import EventCard from 'components/EventCard';

export default function Events() {
  return (
    <Box
      backgroundAttachment="fixed"
      backgroundImage={`linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url(${bgImage})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container>
        <Heading color="white" size="lg">
          Eventos
        </Heading>

        <Grid
          gap={4}
          mt={4}
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          <For of={events} as={event => <EventCard {...event} />} />
        </Grid>
      </Container>
    </Box>
  );
}
