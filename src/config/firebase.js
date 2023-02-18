// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARGlcFgIPXO89TGC-RdSfZSvlQkBBjTLI",
  authDomain: "gymgenius-8c4c2.firebaseapp.com",
  projectId: "gymgenius-8c4c2",
  storageBucket: "gymgenius-8c4c2.appspot.com",
  messagingSenderId: "366530633054",
  appId: "1:366530633054:web:f68cf669fbee30baa343cf"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export default {
    auth,
    db
}