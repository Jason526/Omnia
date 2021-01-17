import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
  authDomain: 'omnia-htnapp.firebaseapp.com',
  databaseURL: 'https://omnia-htnapp-default-rtdb.firebaseio.com/',
  projectId: 'omnia-htnapp',
  storageBucket: 'omnia-htnapp.appspot.com',
  messagingSenderId: '201382537019',
  appId: '1:201382537019:ios:b7b9fc4410dfa419f7791e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };