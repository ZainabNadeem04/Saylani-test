import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore



const firebaseConfig = {
  apiKey: "AIzaSyCd7APAH3EZSYtJo62CnNdte_RPGZBtvKw",
  authDomain: "saylani-b51f7.firebaseapp.com",
  projectId: "saylani-b51f7",
  storageBucket: "saylani-b51f7.firebasestorage.app",
  messagingSenderId: "830150142981",
  appId: "1:830150142981:web:f78642cec40c9dcd9e806c",
  measurementId: "G-EGYK1BMKMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
