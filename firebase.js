// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
let analytics;

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { firestore, auth, googleProvider, githubProvider};
