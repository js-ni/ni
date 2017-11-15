// @flow

import GoogleMapReact from 'google-map-react';
import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';

import Event from '../../components/Event';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import events from './events';
import {
  Box,
  ListTitle,
  Market,
  Title
} from './styles';

class Events extends PureComponent<{}> {
  render() {
    return (
      <div>
        <Header />

        <Container>
          <Title>Eventos</Title>
          <p>Aquí encontraras todos los eventos de la comunidad.</p>

          <Box style={{ height: 280, marginTop: 30 }}>
            <GoogleMapReact
              defaultCenter={[12.1087017, -86.2555539]}
              defaultZoom={11}
            >
              {events.map(event =>
                <Market
                  key={event.name}
                  lat={event.lat}
                  lng={event.lon}
                >
                  <FontAwesomeIcon icon="map" size="sm" />
                </Market>
              )}
            </GoogleMapReact>
          </Box>

          <Box>
            <ListTitle>Próximos Eventos</ListTitle>

            {events.map(event =>
              <Event key={event.name} event={event} />
            )}
          </Box>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Events;
