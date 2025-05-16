// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb6JgKEoFMDX9cAlYKNNlIqkDI2MNx2dw",
  authDomain: "coffee-store-app-312a9.firebaseapp.com",
  projectId: "coffee-store-app-312a9",
  storageBucket: "coffee-store-app-312a9.firebasestorage.app",
  messagingSenderId: "992878868485",
  appId: "1:992878868485:web:b52d6090f94c44a12b846c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);