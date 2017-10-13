import React, { PureComponent } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Wrapper, Container, Posts, Sidebar, Alert, AlertTitle, Post, PostTitle, PostDate, PostPlace, PostLocation } from './styles';

class Events extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header />
        <Container>
          <Posts>
            <Post>
              <PostTitle>Hackathon Nicaragua 2017</PostTitle>
              <PostDate>25 de noviembre</PostDate>
              <PostPlace>Centro De Convenciones Olof Palme</PostPlace>
              <PostLocation>Managua</PostLocation>
            </Post>
            <Post>
              <PostTitle>CoffeeJS</PostTitle>
              <PostDate>Sin definir.</PostDate>
              <PostPlace>Rain Agency</PostPlace>
              <PostLocation>Managua</PostLocation>
            </Post>
          </Posts>
          <Sidebar>
            <Alert>
              <AlertTitle>Aquí encontraras todos los eventos de la comunidad.</AlertTitle>
            </Alert>
          </Sidebar>
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}

export default Events;
