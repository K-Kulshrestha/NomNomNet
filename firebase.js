// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOCqbesK7-bhZN3IWR9rLYNrAh8EI1wHY",
  authDomain: "pantry-tracker-bdcd0.firebaseapp.com",
  projectId: "pantry-tracker-bdcd0",
  storageBucket: "pantry-tracker-bdcd0.appspot.com",
  messagingSenderId: "394282894320",
  appId: "1:394282894320:web:5c1896687eb7ac836fd335",
  measurementId: "G-EMMZ36CN17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}