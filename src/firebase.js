import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAUaHcJ9nfck34VOeTwRVc0uPS-ffTK0hw",
    authDomain: "mowglimiento-app.firebaseapp.com",
    databaseURL: "https://mowglimiento-app.firebaseio.com",
    projectId: "mowglimiento-app",
    storageBucket: "mowglimiento-app.appspot.com",
    messagingSenderId: "316384371373",
    appId: "1:316384371373:web:49230caf97d6ee05169c24",
    measurementId: "G-66097C4PWL"
};
// Initialize Firebase
const f = firebase.initializeApp(firebaseConfig);
const fb = firebase;
const db = f.firestore();
const auth = f.auth();
const storage = f.storage();

export { db, f, auth, storage, fb };
