// @flow

import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import React, { PureComponent } from 'react';

import {
  Date,
  Event as Wrapper,
  Location,
  Title
} from './styles';

type Props = {
  event: {
    address: string,
    lat: number,
    lon: number,
    name: string,
    start_date: string,
    venue_name: string
  }
};

class Event extends PureComponent<Props> {
  render () {
    const { event } = this.props;

    return (
      <Wrapper>
        {event.start_date && (
          <Date dateTime={format(event.start_date, 'YYYY-MM-DDTHH:mm:ssZ')}>
            {format(event.start_date, 'dddd D MMMM YYYY', { locale: esLocale })}
          </Date>
        )}
        <Title>{event.name}</Title>
        <div>
          <Location>{event.address}</Location>
        </div>
      </Wrapper>
    );
  }
}

export default Event;
