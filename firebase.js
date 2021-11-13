// Import firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, you have to paste here the object that comes from firebase
const firebaseConfig = {
  apiKey: "AIzaSyDMdxguJD-I5gwR_n_mLrQ-ufGQ_0FJNIg",
  authDomain: "pruebas-da2cd.firebaseapp.com",
  databaseURL: "https://pruebas-da2cd-default-rtdb.firebaseio.com",
  projectId: "pruebas-da2cd",
  storageBucket: "pruebas-da2cd.appspot.com",
  messagingSenderId: "480344173348",
  appId: "1:480344173348:web:e3aa747c91a52fd70d21b1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  console.info({ firebase });
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };