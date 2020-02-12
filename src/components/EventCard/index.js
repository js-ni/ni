import {format, parseISO} from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function buildStaticMapUrl(lat, lng) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=16&size=580x300&markers=color:red%7Clabel:%7C12.136062922753,-86.266359686852&key=AIzaSyC5YSkpeBuJyiBp0BnkWBW6Es3CQPymD84`;
}

export default function EventCard(props) {
  let {place} = props;
  let {location} = place;
  let {latitude, longitude} = location;

  return (
    <Box bg="white" rounded={4} overflow="hidden">
      <img alt={props.name} src={buildStaticMapUrl(latitude, longitude)} />
      <Box color="#777" p={3}>
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
          <Text mt={2}>
            <FontAwesomeIcon fixedWidth icon={['far', 'calendar-alt']} />
            {format(parseISO(props.start_time), 'MMMM d, y', {
              locale: esLocale,
            })}
          </Text>
          <Text>
            <FontAwesomeIcon fixedWidth icon={['far', 'clock']} />
            {format(parseISO(props.start_time), 'hh:mm a')} -{' '}
            {format(parseISO(props.end_time), 'hh:mm a')}
          </Text>
          <Text>
            <Box
              as="a"
              color="gray.600"
              href={`https://www.google.com/maps/@${latitude},${longitude},17z`}
            >
              <FontAwesomeIcon fixedWidth icon={['far', 'map']} />
              {place.name}
            </Box>
          </Text>
          <Text>
            <FontAwesomeIcon fixedWidth icon={['fas', 'globe-americas']} />
            {location.city}, {location.country}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
