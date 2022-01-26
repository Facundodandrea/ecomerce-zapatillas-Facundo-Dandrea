// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmJapVsf3WSKSTxxnoFnzRCFrYf7lDRE",
  authDomain: "sneaker-chill-2ea3c.firebaseapp.com",
  projectId: "sneaker-chill-2ea3c",
  storageBucket: "sneaker-chill-2ea3c.appspot.com",
  messagingSenderId: "655645828552",
  appId: "1:655645828552:web:26937bb0149d6741e68cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
