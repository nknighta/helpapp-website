//import firebase
import firebase from 'firebase/app';
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Firestoreはログインやユーザー登録の実装には使わないが、今後のことを考えて入れておく
import { getFirestore, Firestore } from 'firebase/firestore'
import {
  getAuth,
  Auth,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4vjXXIqvHgU1v10EOuvlJkq_tibiwqkA",
    authDomain: "helpapp-ffa68.firebaseapp.com",
    projectId: "helpapp-ffa68",
    storageBucket: "helpapp-ffa68.appspot.com",
    messagingSenderId: "139011542698",
    appId: "1:139011542698:web:02728df95c86a824db0ad3"
};

let firebase = FirebaseApp;
let auth = Auth;
let firebasestore = Firestore;


if (typeof window !== "undefined" && getApps().length === 0){
    firebase.initializeApp(firebaseConfig);
}

export { firebase, auth, firebasestore}