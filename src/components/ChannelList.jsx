import React, { Component } from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

const { Card, List } = mui;

class ChannelList extends Component {
  constructor() {
    super();
    this.state = {
      channels: [
        'Star Trek',
        'Star Wars',
        'Game of Thrones'
      ]
    };
  }

  render() {
    const channelNodes = this.state.channels.map((channel, index) => (
      <Channel key={index} channel={channel} />
    ));

    return (
      <Card style={{ flexGrow: 1 }}>
        <List>
          {channelNodes}
        </List>
      </Card>
    );
  }
}

export default ChannelList;
