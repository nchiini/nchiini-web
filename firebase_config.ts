// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0FUDx7EsoQH-bXw5wbdY_Lyv3WZa6dh8",
  authDomain: "nchiini-86492.firebaseapp.com",
  projectId: "nchiini-86492",
  storageBucket: "nchiini-86492.appspot.com",
  messagingSenderId: "335364632797",
  appId: "1:335364632797:web:16059f2a5e817bcbc2ab34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);