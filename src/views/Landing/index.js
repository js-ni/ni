import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Wrapper, Features, AboutTitle, AboutText, Events, Event, EventTitle, EventDate, EventPlace, EventLocation, Networks, Network } from './styles';

class Landing extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
          <Features>
            <AboutTitle>¿Quiénes somos?</AboutTitle>
            <AboutText>Somos un grupo de desarrolladores que nos reunimos para hablar acerca de librerías, frameworks y todo lo relacionado a JavaScript.</AboutText>
            <AboutText>Nos reunimos para socializar y comer pizza, compartimos conocimientos mediante charlas presenciales o vía hangouts. Creamos capital social para tener nuevas oportunidades de empleo.</AboutText>
          </Features>
          <Networks>
            <Network href="https://medium.com/javascript-nicaragua" target="_blank">
              <FontAwesomeIcon icon={['fab', 'medium-m']} size="4x" />
              <div>Blog en medium</div>
            </Network>
            <Network href="http://github.com/js-ni" target="_blank">
              <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
              <div>Github</div>
            </Network>
            <Network href="https://www.facebook.com/JavaScriptNi/" target="_blank">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="4x" />
              <div>Facebook</div>
            </Network>
            <Network href="https://twitter.com/nodenica" target="_blank">
              <FontAwesomeIcon icon={['fab', 'twitter']} size="4x" />
              <div>Twitter</div>
            </Network>
          </Networks>
          <Events>
            <AboutTitle>Eventos</AboutTitle>
            <Event>
              <EventTitle>Hackathon Nicaragua 2017</EventTitle>
              <EventDate>
                <FontAwesomeIcon icon="calendar-check" /> Sábado 25 de noviembre 2017
              </EventDate>
              <EventPlace>
                <FontAwesomeIcon icon="map-pin" /> Centro De Convenciones Olof Palme
              </EventPlace>
              <EventLocation>
                <FontAwesomeIcon icon="map" /> Managua
              </EventLocation>
            </Event>
            <Event>
              <EventTitle>CoffeeJS</EventTitle>
              <EventDate>
                <FontAwesomeIcon icon="calendar-check" /> Sin definir.
              </EventDate>
              <EventPlace>
                <FontAwesomeIcon icon="map-pin" /> Rain Agency
              </EventPlace>
              <EventLocation>
                <FontAwesomeIcon icon="map" /> KM 8.5 Carretera Masaya, De semáforos Santo Domingo 2 c oeste 25 vrs sur, Mirador Norte Santo Domingo, Managua 14236
              </EventLocation>
            </Event>
          </Events>
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;
