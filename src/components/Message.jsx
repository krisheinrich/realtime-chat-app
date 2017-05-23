import React, { Component } from 'react';
import mui from 'material-ui';

const { ListItem, Avatar } = mui;

class Message extends Component {
  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.avatarUrl} />}
      >{this.props.message}</ListItem>
    );
  }
}

export default Message;
