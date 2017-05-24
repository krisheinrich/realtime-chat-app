import React, { Component } from 'react';
import mui from 'material-ui';

const { ListItem, Avatar } = mui;

class Message extends Component {
  render() {
    const { message, profilePic } = this.props.message;
    return (
      <ListItem leftAvatar={<Avatar src={profilePic} />}>
        {message}
      </ListItem>
    );
  }
}

export default Message;
