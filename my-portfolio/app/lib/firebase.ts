// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAmx70KH6kAvqFvrcX1xXtbF89_Agt-Do",
  authDomain: "auth-nextjs-37c37.firebaseapp.com",
  projectId: "auth-nextjs-37c37",
  storageBucket: "auth-nextjs-37c37.firebasestorage.app",
  messagingSenderId: "890920787565",
  appId: "1:890920787565:web:7416972073c01250de6964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
