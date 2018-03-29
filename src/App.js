import React, { Component } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Blog from './components/Blog';
import Events from './components/Events';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <Blog />
        <Events />
      </div>
    );
  }
}

export default App;
