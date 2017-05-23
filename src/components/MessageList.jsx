import React, { Component } from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import _ from 'lodash';
import fb from '../api/firebase.config';

const { Card, List } = mui;

class MessageList extends Component {
  constructor() {
    super();
    this.state = {
      messages: {}
    };
    // Initialize Firebase ref
    this.firebaseRef = fb.database().ref('messages');
    // Subscribe to chat messages and store them as an array on this.state
    this.firebaseRef.on('child_added', (msg) => {
      // only add a message if it is not already in state
      if (this.state.messages[msg.key]) {
        return;
      }

      const msgVal = msg.val();
      msgVal.key = msg.key;
      this.state.messages[msgVal.key] = msgVal;
      this.setState({ messages: this.state.messages });
    });

    this.firebaseRef.on('child_removed', (msg) => {
      const key = msg.key;
      delete this.state.messages[key];
      this.setState({ messages: this.state.messages });
    });

  }

  render() {
    const messageNodes = _.values(this.state.messages)
      .map(({ message, profilePic }, index) => (
        <Message key={index} message={message} avatarUrl={profilePic} />
      ));

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
