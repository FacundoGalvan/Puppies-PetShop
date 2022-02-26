// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJRWKHGHAClmr9L2ttQ7pqtua_mD9rBJc",
  authDomain: "coderhousereact-f58e3.firebaseapp.com",
  projectId: "coderhousereact-f58e3",
  storageBucket: "coderhousereact-f58e3.appspot.com",
  messagingSenderId: "680069059339",
  appId: "1:680069059339:web:260c1e329d24775e2e480e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)