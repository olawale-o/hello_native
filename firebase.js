import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {GOOGLE_FIREBASE_APP_KEY} from '@env';
const firebaseConfig = {
  apiKey: GOOGLE_FIREBASE_APP_KEY,
  authDomain: 'flutter-app-a7111.firebaseapp.com',
  projectId: 'flutter-app-a7111',
  storageBucket: 'flutter-app-a7111.appspot.com',
  messagingSenderId: '525969835454',
  appId: '1:525969835454:web:fc361ffdbaf094628925ef',
};

initializeApp(firebaseConfig);
// Initialize Firebase
const auth = getAuth();
export {auth, signInWithEmailAndPassword, onAuthStateChanged};
