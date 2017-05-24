import Actions from '../actions';
import fb from '../api/firebase.config';

let firebaseRef = null;

const MessageSource = {
  sendMessage: {
    remote(state) {
      return new Promise((resolve, reject) => {
        if (!firebaseRef) {
          return resolve();
        }

        // Save to firebase
        const user = state.user.providerData[0];
        firebaseRef.push().set({
          "message": state.message,
          "date": new Date().toUTCString(),
          "author": user.displayName,
          "userId": user.uid,
          "profilePic": user.photoURL
        });
        resolve();
      });
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
  getMessages: {
    remote(state) {
      // close any references to previous messages
      if (firebaseRef) {
        firebaseRef.off();
      }
      // select messages for current channel
      firebaseRef = fb.database().ref(`messages/${state.selectedChannel.key}`);
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot) => {
          const messages = dataSnapshot.val();
          resolve(messages);

          // do something
          firebaseRef.on("child_added", (msg) => {
            const msgVal = msg.val();
            msgVal.key = msg.key;
            Actions.messageReceived(msgVal);
          });
        })
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessageSource;
