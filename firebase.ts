import {getApp, getApps, initializeApp } from "firebase/app";

// firebase addons
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC7QCkxqo3puKmn71Ex713jZvBSOZoBVwI",
  authDomain: "chappi-9affd.firebaseapp.com",
  projectId: "chappi-9affd",
  storageBucket: "chappi-9affd.appspot.com",
  messagingSenderId: "819019157511",
  appId: "1:819019157511:web:db5ed6e88c6f1c40731aa2",
  measurementId: "G-CPLQVL9JBQ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const analytics = getAnalytics(app);

export { auth, db, functions, analytics };