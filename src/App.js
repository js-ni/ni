import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Blog from './components/Blog';
import Events from './components/Events';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: {},
      blog: {}
    };
  }

  componentDidMount() {
    this.setState({
      events: ReactDOM.findDOMNode(this.refs.events),
      blog: ReactDOM.findDOMNode(this.refs.blog)
    })
  }

  render() {
    return (
      <div>
        <Header events={ this.state.events } />
        <Blog ref={ 'blog' } />
        <Events ref={ 'events' } />
      </div>
    );
  }
}

export default App;
