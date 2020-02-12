import {format, parseISO} from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function buildStaticMapUrl(lat, lng) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=16&size=580x300&markers=color:red%7Clabel:%7C12.136062922753,-86.266359686852&key=AIzaSyC5YSkpeBuJyiBp0BnkWBW6Es3CQPymD84`;
}

export default function EventCard(props) {
  let {place} = props;
  let {location} = place;
  let {latitude, longitude} = location;

  return (
    <Flex
      backgroundColor="white"
      borderRadius="md"
      direction="column"
      overflow="hidden"
      shadow="md"
    >
      <Image
        alt={props.name}
        src={buildStaticMapUrl(latitude, longitude)}
        width="100%"
      />
      <Flex direction="column" flex={1} p={4}>
        <Link>
          <Heading
            as="h2"
            color="gray.900"
            fontWeight="bold"
            fontFamily="heading"
            lineHeight="shorter"
            size="lg"
          >
            {props.name}
          </Heading>
        </Link>
        <Flex
          alignItems="center"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mb={8}
          mt={1}
        >
          <Text color="gray.700">
            {place.name}, {location.city}
          </Text>
          <Button
            as="a"
            href={`https://www.google.com/maps/@${latitude},${longitude},17z`}
            opacity={1}
            size="xs"
            variant="solid"
            variantColor="cyan"
          >
            <FontAwesomeIcon fixedWidth icon={['fas', 'map-marker-alt']} />
            Mapa
          </Button>
        </Flex>
        <Flex
          alignItems="center"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt="auto"
        >
          <Box>
            <Text fontSize="sm">Fecha</Text>
            <Text
              fontSize="xs"
              fontWeight="bold"
              mt={1}
              textTransform="capitalize"
            >
              {format(parseISO(props.start_time), 'MMMM d, y', {
                locale: esLocale,
              })}
            </Text>
          </Box>
          <Box>
            <Text fontSize="sm">Hora</Text>
            <Badge variant="subtle" variantColor="green">
              {format(parseISO(props.start_time), 'hh:mm a')} -{' '}
              {format(parseISO(props.end_time), 'hh:mm a')}
            </Badge>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
