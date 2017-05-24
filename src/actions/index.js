import alt from '../alt';
import fb, { provider } from '../api/firebase.config';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  login(router) {
    return (dispatch) => {
      fb.auth().signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          dispatch(user);
          // Redirect authenticated user
          router.transitionTo('/chat');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          } else {
            console.error(error);
          }
        });
    }
  }
}

export default alt.createActions(Actions);
