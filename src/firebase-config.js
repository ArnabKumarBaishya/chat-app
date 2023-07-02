// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbbocXxFVvsbtWY82BnoK0NuJOHMdKxxo",
  authDomain: "chatapp-16c79.firebaseapp.com",
  projectId: "chatapp-16c79",
  storageBucket: "chatapp-16c79.appspot.com",
  messagingSenderId: "836595058585",
  appId: "1:836595058585:web:84ac5505a4636f3c437508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const provider=new GoogleAuthProvider();