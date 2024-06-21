// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVINHpA3YIwj_aiBwR-UaldOlC6_v9qPM",
  authDomain: "proje-ec59e.firebaseapp.com",
  databaseURL: "https://proje-ec59e-default-rtdb.firebaseio.com",
  projectId: "proje-ec59e",
  storageBucket: "proje-ec59e.appspot.com",
  messagingSenderId: "436702519616",
  appId: "1:436702519616:web:2c7f4cc582fcccc34a1aa5",
  measurementId: "G-ZB68WCWJC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);