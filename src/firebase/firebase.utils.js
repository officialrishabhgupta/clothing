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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    // const collectionSnapshot = await collectionRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAT = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAT,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);

      }
    }
    // console.log(snapShot);

    // console.log(firestore.doc('users/128fdashadu'));

    return userRef;
  };

  export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
    ) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
   });

   return await batch.commit();
  };

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  