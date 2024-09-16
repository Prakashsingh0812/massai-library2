import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVM6LT6pJLn6trCrI5v2KaX1gJyPCYp3I",
    authDomain: "masai-library-eval-2.firebaseapp.com",
    databaseURL: "https://masai-library-eval-2-default-rtdb.firebaseio.com",
    projectId: "masai-library-eval-2",
    storageBucket: "masai-library-eval-2.appspot.com",
    messagingSenderId: "742121050374",
    appId: "1:742121050374:web:143d6334d90bcf2c298e87"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
