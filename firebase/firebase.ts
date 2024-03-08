// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {  getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN8vxfXwzfWvEYV6GiZ6VTu--zcv_QMyg",
  authDomain: "wai-yan-oo-s-wms.firebaseapp.com",
  projectId: "wai-yan-oo-s-wms",
  storageBucket: "wai-yan-oo-s-wms.appspot.com",
  messagingSenderId: "667252082085",
  appId: "1:667252082085:web:8eb6486ec7de9aa498d44c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

 
