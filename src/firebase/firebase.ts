import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBcZpo704mgqr4u_RK-UNWDXa-Nbx7S8uE",
  authDomain: "oxford-4e820.firebaseapp.com",
  projectId: "oxford-4e820",
  storageBucket: "oxford-4e820.appspot.com",
  messagingSenderId: "395731080038",
  appId: "1:395731080038:web:7c4323c95e3a4f3907eea7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const imgDb=getStorage(app)
export const storage=getStorage(app)
export const db= getFirestore(app)
export const googleprovider=new GoogleAuthProvider()