// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhRu7uB0XiDZxHFy6pGsQD7D4lcl-b84c",
  authDomain: "casamento-3425d.firebaseapp.com",
  projectId: "casamento-3425d",
  storageBucket: "casamento-3425d.appspot.com",
  messagingSenderId: "226203423062",
  appId: "1:226203423062:web:922393328a3dcbf80506f7",
};

const app = initializeApp(firebaseConfig);
export const storage = getFirestore(app);
