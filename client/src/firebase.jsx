// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4b705.firebaseapp.com",
  projectId: "mern-estate-4b705",
  storageBucket: "mern-estate-4b705.appspot.com",
  messagingSenderId: "511337108778",
  appId: "1:511337108778:web:ea9ab7929f7b10cc56fa53",
  measurementId: "G-1CGWTLX2GE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);