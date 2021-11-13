import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5JOf3Qmx1qs_tJfcnYsZXmBu0C6T_u2w",
  authDomain: "next-firebase-stripe-431e4.firebaseapp.com",
  projectId: "next-firebase-stripe-431e4",
  storageBucket: "next-firebase-stripe-431e4.appspot.com",
  messagingSenderId: "885440038248",
  appId: "1:885440038248:web:69064bac25e204c1f102dd",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
