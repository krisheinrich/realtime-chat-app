import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCm1RLk1XLE6ScxnjftDe27ejHpw5-hBBo",
  authDomain: "chat-app-f5d58.firebaseapp.com",
  databaseURL: "https://chat-app-f5d58.firebaseio.com",
  projectId: "chat-app-f5d58",
  storageBucket: "chat-app-f5d58.appspot.com",
  messagingSenderId: "1035935556900"
};

export default firebase.initializeApp(config).database().ref('messages');
