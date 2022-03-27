import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIA2Ml_JTtcrG837ZMqAmfNgdpzQWlajk",
  authDomain: "to-do-list-c0ac3.firebaseapp.com",
  projectId: "to-do-list-c0ac3",
  storageBucket: "to-do-list-c0ac3.appspot.com",
  messagingSenderId: "1026358397447",
  appId: "1:1026358397447:web:5814c00330e3b99b97b8a2",
  measurementId: "G-P6MF6FE3N1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
