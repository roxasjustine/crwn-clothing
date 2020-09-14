import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkFQPXaM6BebFiCh7PmXAc0A6PgXWcVuo",
    authDomain: "crwn-clothing-8ee47.firebaseapp.com",
    databaseURL: "https://crwn-clothing-8ee47.firebaseio.com",
    projectId: "crwn-clothing-8ee47",
    storageBucket: "crwn-clothing-8ee47.appspot.com",
    messagingSenderId: "510684253317",
    appId: "1:510684253317:web:3ed6660af2d7de347f2dec",
    measurementId: "G-1KRDXW82EG"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
