import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAeXxhf9j6KnECEBNezCYTJdyu28ENJFw0',
  authDomain: 'auth-using-firebase-70dbd.firebaseapp.com',
  projectId: 'auth-using-firebase-70dbd',
  storageBucket: 'auth-using-firebase-70dbd.appspot.com',
  messagingSenderId: '40779358379',
  appId: '1:40779358379:web:d930be9c225c5a5da8d7ee',
  measurementId: 'G-0M6CNSGR8R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
