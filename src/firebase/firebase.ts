import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAmZU4dV2KEPQupyuzjIwHBhHCs0hAqmHw",
    authDomain: "oxford-kg.firebaseapp.com",
    projectId: "oxford-kg",
    storageBucket: "oxford-kg.appspot.com",
    messagingSenderId: "228532204402",
    appId: "1:228532204402:web:6879feddb6827ef1d9a3eb"
  };

export const app=initializeApp(firebaseConfig)
export const db= getFirestore(app)
export const googleprovider=new GoogleAuthProvider()