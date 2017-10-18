import React, { PureComponent } from 'react';
import {Icon} from 'react-fa';

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
            <Network href="http://github.com/js-ni" target="_blank">
              <Icon size="4x" name="github" /><br />Github
            </Network>
          </Networks>
          <Events>
            <AboutTitle>Eventos</AboutTitle>
            <Event>
              <EventTitle>Hackathon Nicaragua 2017</EventTitle>
              <EventDate>
                <Icon fixedWidth={true} name="calendar-check-o" /> Sábado 25 de noviembre 2015
              </EventDate>
              <EventPlace>
                <Icon fixedWidth={true} name="map-marker"/> Centro De Convenciones Olof Palme
              </EventPlace>
              <EventLocation>
              <Icon fixedWidth={true} name="map-o"/> Managua
              </EventLocation>
            </Event>
            <Event>
              <EventTitle>CoffeeJS</EventTitle>
              <EventDate>
                <Icon fixedWidth={true} name="calendar-check-o" /> Sin definir.
              </EventDate>
              <EventPlace>
                <Icon fixedWidth={true} name="map-marker"/> Rain Agency
              </EventPlace>
              <EventLocation>
                <Icon fixedWidth={true} name="map-o"/> KM 8.5 Carretera Masaya, De semáforos Santo Domingo 2 c oeste 25 vrs sur, Mirador Norte Santo Domingo, Managua 14236
              </EventLocation>
            </Event>
          </Events>
        <Footer />
      </Wrapper>
    );
  }
}

export default Landing;
