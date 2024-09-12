// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmzJteAKXE5mX7mOK-TRsygRX4sn-pUM",
  authDomain: "netfixgpt-3b07d.firebaseapp.com",
  projectId: "netfixgpt-3b07d",
  storageBucket: "netfixgpt-3b07d.appspot.com",
  messagingSenderId: "52655930479",
  appId: "1:52655930479:web:2d0fafab015d0be27aa19a",
  measurementId: "G-G576DMTYXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();