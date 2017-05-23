import Actions from '../actions';
import fb from '../api/firebase.config';

const firebaseRef = fb.database().ref('channels');

const ChannelSource = {
  getChannels: {
    remote(state) {
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot) => {
          const channels = dataSnapshot.val();
          resolve(channels);
        })
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;
