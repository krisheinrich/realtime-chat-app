import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'Hey, hows it goin?',
        'Good :) hbu?'
      ]
    };
  }

  render() {
    const messageNodes = this.state.messages.map((message, index) => (
      <div key={index}>{message}</div>
    ));

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;
