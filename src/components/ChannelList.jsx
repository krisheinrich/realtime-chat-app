import React, { Component } from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const { Card, List, CircularProgress } = mui;

const Styles = {
  card: {
    flexGrow: 1
  },
  progress: {
    padding: '20px 0',
    margin: '0 auto',
    display: 'block',
    width: 60
  }
};

@connectToStores
class ChannelList extends Component {
  componentDidMount() {
    this.selectedChannel = this.props.params.channel;
    ChatStore.getChannels(this.selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
    if (this.selectedChannel != nextProps.params.channel) {
      this.selectedChannel = nextProps.params.channel;
      ChatStore.getChannels(this.selectedChannel);
    }
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    if (!this.props.channels) {
      return (
        <Card style={Styles.card}>
          <CircularProgress mode="indeterminate" style={Styles.progress} />
        </Card>
      );
    }

    const channelNodes = _(this.props.channels)
      .keys()
      .map((key) => (
        <Channel key={key} channel={this.props.channels[key]} />
      ))
      .value();

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
