// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA30X0Q3AGgtyel_73_QhWQNmT0MDuLKEo",
  authDomain: "the-dragon-news-41995.firebaseapp.com",
  projectId: "the-dragon-news-41995",
  storageBucket: "the-dragon-news-41995.appspot.com",
  messagingSenderId: "767488064369",
  appId: "1:767488064369:web:c5dd1b859ae0c3d55114d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;