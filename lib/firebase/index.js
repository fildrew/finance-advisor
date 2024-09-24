// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKDDGujziGSm52UPewEJrT12nx9H6IACA",
  authDomain: "finance-tracker-af181.firebaseapp.com",
  projectId: "finance-tracker-af181",
  storageBucket: "finance-tracker-af181.appspot.com",
  messagingSenderId: "294511807380",
  appId: "1:294511807380:web:256750f96b3e164f369d81",
  measurementId: "G-7G1JQZMDM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };