/**
 * Events component
 *
 * events.json is generated with https://bit.ly/2GGShnQ
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import Data from './events.json';
import Moment from 'moment';

class Events extends Component {

  // Url from static map
  staticMapUrl(latitude, longitude) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=16&size=400x200&markers=color:red%7Clabel:%7C${latitude},${longitude}`;
  }

  // Url from google maps
  googleMapsUrl(latitude, longitude) {
    return `https://www.google.com/maps/@${latitude},${longitude},17z`
  }

  // Url from facebook event
  facebookEventUrl(eventId) {
    return `https://www.facebook.com/events/${ eventId }/`
  }

  // To render events
  renderEvents() {
    let items = Data.map((item, index) => {

      // format data
      const date = Moment(item.start_time).format('LL');

      // format time
      const startTime = Moment(item.start_time).format('hh:mm A');
      const endTime = Moment(item.end_time).format('hh:mm A');

      // render card with content
      return (
        <Grid.Column key={index}>
          <Card>
            <Image src={ this.staticMapUrl(item.place.location.latitude, item.place.location.longitude) } />
            <Card.Content>
              <Card.Header>
                <a href={ this.facebookEventUrl(item.id) }>
                  { item.name }
                </a>
              </Card.Header>
              <Card.Meta>
                <Icon name='calendar outline' />
                <span className='date'>
                  { date }
                </span>
              </Card.Meta>
              <Card.Meta>
                <Icon name='clock' />
                <span className='time'>
                  { startTime } - { endTime }
                </span>
              </Card.Meta>
              <Card.Meta>
                <Icon name='map' />
                <a href={ this.googleMapsUrl(item.place.location.latitude, item.place.location.longitude) }>
                  { item.place.name }
                </a>
              </Card.Meta>
              <Card.Meta>
                <Icon name='globe' />
                { item.place.location.city }, { item.place.location.country }
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    // return grid
    return (
      <Grid columns={3}>
        <Grid.Row>
          { items }
        </Grid.Row>
      </Grid>
    );
  }

  // react render
  render() {
    Moment.locale('es');
    return (
      <Wrapper>
        <Title>
          Eventos
        </Title>
        { this.renderEvents() }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 948px;
  margin 0 auto;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  padding: 30px 5px;
`;

const Title = styled.h1`

`;

export default Events;
