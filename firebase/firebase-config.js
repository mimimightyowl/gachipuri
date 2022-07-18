import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

export const authentication = getAuth(app);

export const googleConfig = () => {
  GoogleSignin.configure({
    webClientId:
      '928330599825-6oka31ji83aphgmcbga85qt1mkh41000.apps.googleusercontent.com',
  });
};
