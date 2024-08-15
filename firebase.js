// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  next_public_firebase_apiKey,
  authDomain: next_public_firebase_authDomain,
  projectId: next_public_firebase_projectId,
  storageBucket: next_public_firebase_storageBucket,
  messagingSenderId: next_public_firebase_messagingSenderId,
  appId: next_public_firebase_appId,
  measurementId:   next_public_firebase_measurementId
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
