import * as firebase from 'firebase';
import config from './config';

// Global Firebase instance
export default firebase.initializeApp(config);

// Auth ref (using Google)
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export { provider };
