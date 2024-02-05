// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV0JYH8ZJms30bJdfjMD8U-AI-XK98Zbg",
    authDomain: "graficapopular-4d17f.firebaseapp.com",
    projectId: "graficapopular-4d17f",
    storageBucket: "graficapopular-4d17f.appspot.com",
    messagingSenderId: "333915104059",
    appId: "1:333915104059:web:0ec53657ff9a4702628d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);