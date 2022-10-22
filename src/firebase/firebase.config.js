// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: "AIzaSyBBc7W2kZXOVuQvgePcKd84PQuDgIxOMuo",
// authDomain: "dragon-news-5d272.firebaseapp.com",
// projectId: "dragon-news-5d272",
// storageBucket: "dragon-news-5d272.appspot.com",
// messagingSenderId: "28234107712",
// appId: "1:28234107712:web:becdf414980afc381808a5"