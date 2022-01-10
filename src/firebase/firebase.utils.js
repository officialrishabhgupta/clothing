import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
    apiKey: "AIzaSyDLlHKbsukMgIKzXucyuF9aDZmBAiaL8Ys",
    authDomain: "crown-d5751.firebaseapp.com",
    projectId: "crown-d5751",
    storageBucket: "crown-d5751.appspot.com",
    messagingSenderId: "262620580538",
    appId: "1:262620580538:web:4bf55e0090418a8873d083",
    measurementId: "G-TX0MW82GTR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);

  