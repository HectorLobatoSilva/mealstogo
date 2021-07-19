import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {};
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
