// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import firebase from 'firebase/compat/app';
import { getFirestore} from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,

  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,

  projectId: import.meta.env.VITE_FB_PROJECT_ID,

  storageBucket: import.meta.env.VITE_FB_STORAGE_B,

  messagingSenderId: import.meta.env.VITE_FB_,

  appId: import.meta.env.VITE_FB_APP_ID,
};


const app = firebase.initializeApp(firebaseConfig)
const db =getFirestore(app)

export { db }

