import React, { Component } from 'react';
import styled from 'styled-components';
import { Item } from 'semantic-ui-react';
import Data from './blog.json';

class Blog extends Component {

  mediumPostUrl(id) {
    return `https://medium.com/javascript-nicaragua/${id}`
  }

  // To render events
  renderPosts() {
    let items = Data.map((item, index) => {
      return (
        <Item key={index}>
          <Item.Image size='tiny' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a' href={ this.mediumPostUrl(item.id) }>
              { item.title }
            </Item.Header>
            <Item.Meta>
              { item.description }
            </Item.Meta>
            <Item.Extra>
              { item.publishedAt }
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });

    // return grid
    return (
      <Item.Group>
        { items }
      </Item.Group>
    );
  }


  render() {
    return (
      <Wrapper>
        <Title>
          Blog

          <ViewAll href="https://medium.com/javascript-nicaragua">
            VER TODOS
          </ViewAll>
        </Title>
        { this.renderPosts() }
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

const ViewAll = styled.a`
  float: right;
  font-size: 12px;
  padding: 5px 10px;
  &:hover {
    background-color: rgba(200, 200, 200, .2);
  }
`;

export default Blog;
