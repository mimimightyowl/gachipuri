// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyv9QJg7Hfm_aWijLk1HlCvXof2jjaLbw',
  authDomain: 'gachipuri-33316.firebaseapp.com',
  projectId: 'gachipuri-33316',
  storageBucket: 'gachipuri-33316.appspot.com',
  messagingSenderId: '928330599825',
  appId: '1:928330599825:web:effebe8089c5b9bf5e9e30',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const currentUser = auth.currentUser;
