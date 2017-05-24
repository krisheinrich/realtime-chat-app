import React, { Component } from 'react';
import mui from 'material-ui';
import trim from 'trim';
import _ from 'lodash';
import Actions from '../actions';

const { Card } = mui;

const Styles = {
  box: {
    width: '100%',
    maxWidth: 1200,
    margin: '30px auto',
    padding: '12px 30px'
  },
  input: {
    width: '100%',
    borderColor: '#d0d0d0',
    resize: 'none',
    borderRadius: 3,
    minHeight: 50,
    color: '#555',
    fontSize: 14,
    outline: 'auto 0px'
  }
};

class MessageBox extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onKeyUp(e) {
    // Save message to firebase when user presses return key
    if (e.keyCode === 13 && trim(e.target.value) != '') {
      e.preventDefault();

      Actions.sendMessage(this.state.message);
      console.log("Sent a new message: ", e.target.value);
      // Reset state
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <Card className="container" style={Styles.box}>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={Styles.input}
        />
      </Card>
    );
  }
}

export default MessageBox;
