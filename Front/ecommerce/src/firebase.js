// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1z6-eQPxmcDnQ6K315XeKZKw5EXLvX64",
  authDomain: "ecommerce-react-app-2023.firebaseapp.com",
  projectId: "ecommerce-react-app-2023",
  storageBucket: "ecommerce-react-app-2023.appspot.com",
  messagingSenderId: "518420127285",
  appId: "1:518420127285:web:4e4e9ecf33db8c51d2db7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);