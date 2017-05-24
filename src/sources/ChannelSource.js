import Actions from '../actions';
import fb from '../api/firebase.config';

const firebaseRef = fb.database().ref('channels');

const ChannelSource = {
  getChannels: {
    remote(state, selectedChannelKey) {
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot) => {
          const channels = dataSnapshot.val();
          selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
          let selectedChannel = channels[selectedChannelKey];
          if (selectedChannel) {
            selectedChannel.selected = true;
          }
          resolve(channels);
        })
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;
