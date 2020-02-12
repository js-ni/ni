import {format, parseISO} from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function TalkCard(props) {
  return (
    <Box bg="white" rounded={4} p={4}>
      <Heading as="h3" size="md">
        <Box
          as="a"
          color="#4183c4"
          href={`https://www.facebook.com/events/${props.id}`}
        >
          {props.name}
        </Box>
      </Heading>

      <Box color="gray.600">
        <Text mt={4} css={{textTransform: 'capitalize'}}>
          <FontAwesomeIcon fixedWidth icon={['far', 'calendar-alt']} />
          {format(parseISO(props.start_time), 'MMMM d, y', {locale: esLocale})}
        </Text>
        <Text mt={1}>
          <FontAwesomeIcon fixedWidth icon={['far', 'clock']} />
          {format(parseISO(props.start_time), 'hh:mm a')} -{' '}
          {format(parseISO(props.end_time), 'hh:mm a')}
        </Text>
      </Box>
    </Box>
  );
}
