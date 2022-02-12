import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { firebaseConfig } from "auth/firebase";
import { getAuth } from "firebase-admin/auth";

export const app = getApps().length
  ? getApp()
  : initializeApp({
      // @ts-ignore
      credential: cert(firebaseConfig),
    });

export const auth = getAuth(app);
