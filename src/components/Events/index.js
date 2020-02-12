import React from 'react';
import {For} from 'react-loops';
import {Box, Grid, Heading} from '@chakra-ui/core';

import bgImage from './event.jpg';
import events from './events.json';
import EventCard from '../EventCard';

export default function Events() {
  return (
    <Box
      backgroundAttachment="fixed"
      backgroundImage={`linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.9)), url(${bgImage})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box m="0 auto" maxWidth={948} px={[3, 4, 4, 0]} py={[4, 8]}>
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
      </Box>
    </Box>
  );
}
