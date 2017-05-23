import React, { Component } from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

const Styles = {
  container: {
    width: '100%',
    maxWidth: 1200,
    margin: '30px auto',
    display: 'flex',
    flexFlow: 'row wrap'
  }
};

@connectToStores  // req. getStores() and getPropsFromStores()
class App extends Component {
  constructor() {
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

  // Alt stores to watch for state changes
  static getStores() {
    return [ChatStore];
  }

  // Recalculate component when any store updates
  static getPropsFromStores() {
    return ChatStore.getState();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    let view = <Login />;
    // Authenticated view
    if (this.props.user) {
      view = (
        <div>
          <div style={Styles.container}>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      );
    }
    return (
      <div>
        <AppBar title="Realtime Chat" />
        { view }
      </div>
    );
  }
}

export default App;
