import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({children}) => {
  

  // create user //

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Log in user //

  const logInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userInfo = {
      createUser,
      logInUser
  }

  return (
    <div>
      <AuthContext value={userInfo}>
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;