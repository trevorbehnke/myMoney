import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARC6eWykdAUs0j9vXH76UCvz6B_CsVb1k",
  authDomain: "mymoney-f2c37.firebaseapp.com",
  projectId: "mymoney-f2c37",
  storageBucket: "mymoney-f2c37.appspot.com",
  messagingSenderId: "263896445749",
  appId: "1:263896445749:web:440e9bf46467f32058527c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
