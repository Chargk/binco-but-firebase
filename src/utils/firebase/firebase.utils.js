import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3Sw8evh6bVtcxfrmpUnvOI0mOkRwM9w0",
  authDomain: "binco-firebase.firebaseapp.com",
  projectId: "binco-firebase",
  storageBucket: "binco-firebase.appspot.com",
  messagingSenderId: "1078392726228",
  appId: "1:1078392726228:web:27c068e9fd856fb75c5141"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
