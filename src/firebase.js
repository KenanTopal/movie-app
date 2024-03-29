
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register a user


export const registerUser = async(email, password, displayName) => {
  try{
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {displayName})
  } catch(err){
    return err.message.replace('Firebase:', '')
  }
}

// Login

export const login = async(email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password)
  }catch(err){
    return err.message.replace('Firebase:', '')
  }
}

// User Observer

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user)=>{
    if(user) setCurrentUser(user)
    else setCurrentUser(null)
  })
}

// signout
export const logout = () => {
  signOut(auth)
}

export const signUpProvider = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

export const forgetPassword = async(email)=>{
  try{
    await sendPasswordResetEmail(auth, email)
    return 'Please check your mail box!'
  }catch(err){
    return err.message.replace('Firebase:', '')
  }
}