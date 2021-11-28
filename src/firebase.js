import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBTZO05TaK25-ou8Yrj4lBtvlsCtl4hu7w",
        authDomain: "firechat-3a4f0.firebaseapp.com",
        projectId: "firechat-3a4f0",
        storageBucket: "firechat-3a4f0.appspot.com",
        messagingSenderId: "1018326607541",
        appId: "1:1018326607541:web:0609e928a7fa84fa91c0fc",
        measurementId: "G-KJNHM43M0N"
    }
);


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
