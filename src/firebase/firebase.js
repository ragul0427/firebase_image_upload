// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhXgnDZ6pwh0XA0dL3gvqRoPyUWHeeIF4",
  authDomain: "upload-e26b2.firebaseapp.com",
  projectId: "upload-e26b2",
  storageBucket: "upload-e26b2.appspot.com",
  messagingSenderId: "71575702082",
  appId: "1:71575702082:web:c936e62e830a05d024fbdb",
  measurementId: "G-NVG6318YR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);