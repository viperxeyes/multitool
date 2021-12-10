import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5z2TRVyewWY34FI1DOB-zlkqfnHZ434A",
  authDomain: "multitool-6d884.firebaseapp.com",
  projectId: "multitool-6d884",
  storageBucket: "multitool-6d884.appspot.com",
  messagingSenderId: "372056407446",
  appId: "1:372056407446:web:d12ec7930981ea3b8cb1b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
