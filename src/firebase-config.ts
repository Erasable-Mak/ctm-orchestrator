import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTRN_cEB7zL2jCvKLOrTGp_ruD3HhNp_c",
  authDomain: "property-evaluation-dev.firebaseapp.com",
  projectId: "property-evaluation-dev",
  storageBucket: "property-evaluation-dev.appspot.com",
  messagingSenderId: "428604458899",
  appId: "1:428604458899:web:423048db9e71fd89f40a66",
  measurementId: "G-HVH8M8H24Q",
};

const app = initializeApp(firebaseConfig);
const secondaryApp = initializeApp(firebaseConfig, "secondary"); //if anything goes wrong add secondaty here

export const db = getFirestore(app);
export const auth = getAuth(app);
export const secondaryAuth = getAuth(secondaryApp);
export const storage = getStorage(app);
export const functions = getFunctions(app);
