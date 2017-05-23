import React, { Component } from 'react';
import mui from 'material-ui';

const { ListItem } = mui;

class Channel extends Component {
  render() {
    return (
      <ListItem>{this.props.channel}</ListItem>
    );
  }
}

export default Channel;
