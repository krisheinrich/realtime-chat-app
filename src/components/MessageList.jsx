import React, { Component } from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import _ from 'lodash';
import fb from '../api/firebase.config';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const { Card, List, CircularProgress } = mui;

@connectToStores
class MessageList extends Component {
  constructor() {
    super();
    this.state = {
      messages: {}
    };
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    let messageNodes = null;

    if (!this.props.messagesLoading) {
      messageNodes = _.values(this.props.messages)
        .map((message, index) => (
          <Message key={index} message={message} />
        ));
    } else {
      messageNodes = <CircularProgress mode="indeterminate" style={{
        paddingTop: 20,
        paddingBottom: 20,
        margin: '0 auto',
        display: 'block',
        width: 50
      }}/>
    }

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
