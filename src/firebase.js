import firebase from "firebase/app";

// Import needed firebase modules
import "firebase/auth";

import 'firebase/firestore';

// Firebase app config
const config = {
    apiKey: "AIzaSyA0Gw0dOXbaQ8qB_sOkWD6xCbeO9v8gAic",
    authDomain: "authexample-6a1fb.firebaseapp.com",
    databaseURL: "https://authexample-6a1fb.firebaseio.com",
    projectId: "authexample-6a1fb",
    storageBucket: "authexample-6a1fb.appspot.com",
    messagingSenderId: "259401725458",
    appId: "1:259401725458:web:88306940a62db75aaacacb",
    measurementId: "G-WR4SC7G1X5"
};

firebase.initializeApp(config);


let auth = firebase.auth();

const db = firebase.firestore();

export { auth, db };