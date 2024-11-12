import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBK10Buv5Uh56GghcbqffdKD49SBwIlsQw",
  authDomain: "my-workout-f5a7c.firebaseapp.com",
  projectId: "my-workout-f5a7c",
  storageBucket: "my-workout-f5a7c.firebasestorage.app",
  messagingSenderId: "729425909115",
  appId: "1:729425909115:web:dfe2c4314524bf5b80d9de",
  measurementId: "G-6ZTB7HQX65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const collectionRef = collection(db, 'exercises')

export { app, db, collectionRef }
