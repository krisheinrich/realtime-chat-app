import alt from '../alt';
import fb, { provider } from '../api/firebase.config';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed'
    );
  }

  login(args) {
    return (dispatch) => {
      fb.auth().signInWithPopup(provider)
        .then((result) => {
          // const token = result.credential.accessToken;
          const user = result.user;
          dispatch(user);
          console.dir(user);
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = error.credential;
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
