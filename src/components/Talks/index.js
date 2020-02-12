import React from 'react';
import {For} from 'react-loops';
import {Box, Grid, Heading} from '@chakra-ui/core';

import talks from './talks.json';
import Container from 'components/Container';
import TalkCard from 'components/TalkCard';

export default function Talks() {
  return (
    <Box bg="rgba(44, 62, 80, 0.9)">
      <Container>
        <Heading color="white" size="lg">
          Charlas
        </Heading>

        <Grid
          gap={4}
          mt={4}
          templateColumns="repeat(auto-fill, minmax(280px, 1fr))"
        >
          <For of={talks} as={talk => <TalkCard {...talk} />} />
        </Grid>
      </Container>
    </Box>
  );
}
