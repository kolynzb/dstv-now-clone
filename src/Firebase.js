import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQgjXVXg4Mvme6kFYKLBqW_ESUV8T74UY",
  authDomain: "dstv-clone.firebaseapp.com",
  projectId: "dstv-clone",
  storageBucket: "dstv-clone.appspot.com",
  messagingSenderId: "413860346900",
  appId: "1:413860346900:web:cb238798b441f1b9fd3b01",
  measurementId: "G-9Z91LJZ8LS",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = firebase.auth();

export default db;
