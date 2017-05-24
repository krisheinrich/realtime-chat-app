import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';
import Actions from '../actions';

const { Card, CardText, RaisedButton } = mui;

const Styles = {
  card: {
    maxWidth: 800,
    margin: '30px auto',
    padding: 50
  },
  text: {
    textAlign: 'center'
  },
  button: {
    display: 'block'
  }
};

class Login extends Component {
  onClick() {
    Actions.login(this.context.router);
  }

  static contextTypes = {
    router: PropTypes.func.isRequired
  }

  render() {
    return (
      <Card style={Styles.card}>
        <CardText style={Styles.text}>
          To start chatting, please log in with your Google account.
        </CardText>

        <RaisedButton style={Styles.button} onClick={this.onClick.bind(this)} label="Login with Google" />
      </Card>
    );
  }
}

export default Login;
