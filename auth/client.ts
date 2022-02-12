import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { signIn } from "next-firebase-auth-cookies";

/* const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}; */
const firebaseConfig = {
  apiKey: "AIzaSyCTrs7RTyR8yg7B1T8IPAXwkMATFfiz0yw",
  authDomain: "library-demo-1c55c.firebaseapp.com",
  projectId: "library-demo-1c55c",
  storageBucket: "library-demo-1c55c.appspot.com",
  messagingSenderId: "684570262788",
  appId: "1:684570262788:web:dfee39e93cc0e826b26451",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const providers = {
  google: () =>
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(signIn)
      .catch(() => {}),
  github: () =>
    signInWithPopup(auth, new GithubAuthProvider())
      .then(signIn)
      .catch(() => {}),
};
