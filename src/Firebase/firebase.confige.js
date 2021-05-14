import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWJhhC6xuV0VxTb-dq0XUT2lywnD-uonc",
  authDomain: "motion-e-commerce.firebaseapp.com",
  projectId: "motion-e-commerce",
  storageBucket: "motion-e-commerce.appspot.com",
  messagingSenderId: "655008591629",
  appId: "1:655008591629:web:3c2bace7349fab9cb90a44",
  measurementId: "G-KLGBTY3FJ6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
const database = firebase.database();


const facebookProvider = new firebase.auth.FacebookAuthProvider;
facebookProvider.setCustomParameters({
  prompt: "select_account",
});

export { firebase, googleProvider, facebookProvider,database as default };
