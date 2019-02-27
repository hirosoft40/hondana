import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBUbGaONT-Yo_Cg1AX8q2jcGy30Rjy1EHg",
  authDomain: "books-232403.firebaseapp.com",
  databaseURL: "https://books-232403.firebaseio.com",
  projectId: "books-232403",
  storageBucket: "books-232403.appspot.com",
  messagingSenderId: "221233251059"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
