import { initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6N-xXuxKUZCtnLT5f9nIFbZ_6jKenlwA",
  authDomain: "package-demo-4e3bf.firebaseapp.com",
  projectId: "package-demo-4e3bf",
  storageBucket: "package-demo-4e3bf.appspot.com",
  messagingSenderId: "309254638096",
  appId: "1:309254638096:web:12058a1f72dcf8000c9895",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

type A = {
  google: [Auth, GoogleAuthProvider];
  github: [Auth, GithubAuthProvider];
};

export const providers: A = {
  google: [auth, new GoogleAuthProvider()],
  github: [auth, new GithubAuthProvider()],
};
