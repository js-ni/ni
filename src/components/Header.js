import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoImage from './logo.png';
import scrollTo from 'scroll-to';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: props.home,
      events: props.events,
      blog: props.blog,
      repositories: props.repositories
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      home: nextProps.home,
      events: nextProps.events,
      blog: nextProps.blog,
      repositories: nextProps.repositories
    });
  }

  // to move scroll to component
  goTo = (e) => {
    let height = 0;
    const node = this.state[e.target.id];

    if (node){
      height = (e.target.id === 'events') ? 343 : height;
      scrollTo(0, height, {
        ease: 'out-bounce',
        duration: 1500
      });
    }

    e.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <Logo width="32" height="32" src={LogoImage} alt="JavaScript Nicaragua" />
        <Title>JavaScript Nicaragua</Title>
        <Navigation>
          <Item>
            <Link href="#" onClick={this.goTo} id="home">Inicio</Link>
          </Item>
          <Item>
            <Link href="#" onClick={this.goTo} id="events">Eventos</Link>
          </Item>
          <Item>
            <Link href="#" onClick={this.goTo} id="blog">Blog</Link>
          </Item>
          <Item>
            <Link href="#" onClick={this.goTo} id="repositories">Proyectos</Link>
          </Item>
        </Navigation>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  padding: 0 24px;
  position: relative;
  background-color: #ffffff;
  border-bottom: 1px solid #bdbdbd;
  line-height: 48px;
`;

const Title = styled.h1`
  color: #757575;
  font-weight: normal;
  font-size: 26px;
  font-family: 'PT Sans Narrow', sans-serif;
  margin: 0;
  padding: 0;
`;

const Logo = styled.img`
  margin-top: 8px;
  margin-right: 10px;
`;

const Navigation = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 40px;
`;

const Item = styled.li`
  float: left;
`;

const Link = styled.a`
  text-decoration: none;
  float: left;
  color: rgba(0,0,0,.54);
  font-weight: 400;
  text-transform: none;
  padding: 0 24px;
`;

Header.propTypes = {
  events: PropTypes.object,
  blog: PropTypes.object
}

export default Header;
