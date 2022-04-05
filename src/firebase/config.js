import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCC4D1pHiwgQgabefuzNI2lSZm7OlatBg4",
  authDomain: "techcommerce-ee794.firebaseapp.com",
  projectId: "techcommerce-ee794",
  storageBucket: "techcommerce-ee794.appspot.com",
  messagingSenderId: "493849567682",
  appId: "1:493849567682:web:c370e0dd27f6794e49365b"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app