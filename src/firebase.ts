import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {

  apiKey: "AIzaSyDtS7-vuJ5TDEBaKqLXkvEYRjXYhu1XSY8",

  authDomain: "cis371-e15a4.firebaseapp.com",

  projectId: "cis371-e15a4",

  storageBucket: "cis371-e15a4.firebasestorage.app",

  messagingSenderId: "698632450490",

  appId: "1:698632450490:web:5bd30d0bfb263bc65fed83"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
