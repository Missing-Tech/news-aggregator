import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdemAHpAx-nqMT0xSI0pKweT2zjhwph9w",
  authDomain: "news-aggregator-58a33.firebaseapp.com",
  projectId: "news-aggregator-58a33",
  storageBucket: "news-aggregator-58a33.appspot.com",
  messagingSenderId: "738868118348",
  appId: "1:738868118348:web:dd6242d1313072011685e9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
