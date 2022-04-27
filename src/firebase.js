import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp(
    {
        // your config
    }
);


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
