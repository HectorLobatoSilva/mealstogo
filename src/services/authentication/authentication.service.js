import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 'AIzaSyA7kRurl_E1C5NvtpwVzhWmyWVJ594adnc',
    authDomain: 'mealstogo-60f0c.firebaseapp.com',
    projectId: 'mealstogo-60f0c',
    storageBucket: 'mealstogo-60f0c.appspot.com',
    messagingSenderId: '469892448465',
    appId: '1:469892448465:web:d65650310203838be305f0',
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const loginRequest = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

export const checkUserState = callback =>
    firebase.auth().onAuthStateChanged(callback);

export const logoutRequest = () => firebase.auth().signOut();
