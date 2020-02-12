import React from 'react';
import {For} from 'react-loops';
import {Box, Grid, Heading} from '@chakra-ui/core';

import talks from './talks.json';
import TalkCard from '../TalkCard';

export default function Talks() {
  return (
    <Box bg="rgba(44, 62, 80, 0.9)">
      <Box m="0 auto" maxWidth={948} px={[3, 4, 4, 0]} py={[4, 8]}>
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
      </Box>
    </Box>
  );
}
