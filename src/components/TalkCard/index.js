import {format, parseISO} from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import {Box, Flex, Heading, Icon} from '@chakra-ui/core';

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
        <Flex align="center" mt={4} textTransform="capitalize">
          <Icon name="calendar-alt" mr={1} />
          {format(parseISO(props.start_time), 'MMMM d, y', {locale: esLocale})}
        </Flex>
        <Flex align="center" mt={1}>
          <Icon name="clock" mr={1} />
          {format(parseISO(props.start_time), 'hh:mm a')} -{' '}
          {format(parseISO(props.end_time), 'hh:mm a')}
        </Flex>
      </Box>
    </Box>
  );
}
