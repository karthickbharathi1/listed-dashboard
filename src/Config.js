// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUCNln5YGhge7_fv4vD4hrvIyUUro_-aE",
  authDomain: "dashboard-ui-c4431.firebaseapp.com",
  projectId: "dashboard-ui-c4431",
  storageBucket: "dashboard-ui-c4431.appspot.com",
  messagingSenderId: "464266587701",
  appId: "1:464266587701:web:8fb0df8d8e9ca72d180b7c",
  measurementId: "G-HVFNJPT7LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider};