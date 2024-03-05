// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-6f09c.firebaseapp.com",
  projectId: "mern-blog-6f09c",
  storageBucket: "mern-blog-6f09c.appspot.com",
  messagingSenderId: "41765262554",
  appId: "1:41765262554:web:f881b1fd57f3af863b81e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

