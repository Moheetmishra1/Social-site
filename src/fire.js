// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjS0EgPFYxw_OjT-attLGwCXPXM2grdCY",
  authDomain: "sign-in-fde0b.firebaseapp.com",
  projectId: "sign-in-fde0b",
  storageBucket: "sign-in-fde0b.appspot.com",
  messagingSenderId: "638335781434",
  appId: "1:638335781434:web:c66f6692c4dac451a54303",
  measurementId: "G-7STK5XX6DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);