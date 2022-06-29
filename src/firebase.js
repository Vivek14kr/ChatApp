import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbOT5nF7sUwLqQTl6RGxwvubR5A6uvBgc",
  authDomain: "auth-development-c708b.firebaseapp.com",
  projectId: "auth-development-c708b",
  storageBucket: "auth-development-c708b.appspot.com",
  messagingSenderId: "1009171643762",
  appId: "1:1009171643762:web:5a1fa4d2e6072ec64231eb",
};

 firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();

export {auth };
