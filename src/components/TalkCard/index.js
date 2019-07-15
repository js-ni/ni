import {format, parseISO} from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React from 'react';
import {Card, Heading, Link, Text} from 'rebass';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TalkCard(props) {
  return (
    <Card bg="white" borderRadius={4} color="#777" p={3}>
      <Heading fontSize={3}>
        <Link
          color="#4183c4"
          href={`https://www.facebook.com/events/${props.id}`}
        >
          {props.name}
        </Link>
      </Heading>

      <Text mt={2} css={{textTransform: 'capitalize'}}>
        <FontAwesomeIcon fixedWidth icon={['far', 'calendar-alt']} />
        {format(parseISO(props.start_time), 'MMMM d, y', {locale: esLocale})}
      </Text>
      <Text>
        <FontAwesomeIcon fixedWidth icon={['far', 'clock']} />
        {format(parseISO(props.start_time), 'hh:mm a')} -{' '}
        {format(parseISO(props.end_time), 'hh:mm a')}
      </Text>
    </Card>
  );
}

export default TalkCard;
