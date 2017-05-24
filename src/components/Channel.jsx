import React, { Component } from 'react';
import mui from 'material-ui';
import Actions from '../actions';

const { ListItem } = mui;

class Channel extends Component {
  render() {
    const style = {};
    if (this.props.channel.selected) {
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem
        href={'/#/chat/' + this.props.channel.key}
        key={this.props.channel.key}
        style={style}
      >
        {this.props.channel.name}
      </ListItem>
    );
  }
}

export default Channel;
