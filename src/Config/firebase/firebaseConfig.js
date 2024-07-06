import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import app from "./firebaseConfig";





const firebaseConfig = {
  apiKey: "AIzaSyALRxnoLUZwPK27-NagBG0U7tZn_OwbTww",
  authDomain: "login-signup-8eeb8.firebaseapp.com",
  projectId: "login-signup-8eeb8",
  storageBucket: "login-signup-8eeb8.appspot.com",
  messagingSenderId: "610750036543",
  appId: "1:610750036543:web:b4cad8d12aacd96593d68a",
  measurementId: "G-631QF8SXM8",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export default app
