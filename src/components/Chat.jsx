import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ChatStore from '../stores/ChatStore';

const Styles = {
  container: {
    width: '100%',
    maxWidth: 1200,
    margin: '30px auto',
    display: 'flex',
    flexFlow: 'row wrap'
  }
};

class Chat extends Component {
  render() {
    return (
      <div>
        <div style={Styles.container}>
          <ChannelList {...this.props}/>
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }

  static willTransitionTo(transition) {
    const state = ChatStore.getState();
    if (!state.user) {
      transition.redirect('/login');
    }
  }
}

export default Chat;
