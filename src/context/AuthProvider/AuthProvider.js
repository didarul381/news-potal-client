import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';
 export  const AuthContext=createContext();
  const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loding,setLoding]=useState(true);
    //const user={displayName:"BBB"}


     const providerLogin=(provider)=>{

    return signInWithPopup(auth,provider)
     }

    
      const createUser=(email,password)=>{
        setLoding(true);
       return createUserWithEmailAndPassword(auth,email,password)
      }

      const singIn=(email,password)=>{
        setLoding(true);
          return signInWithEmailAndPassword(auth,email,password)
      }

       const emailVarified=()=>{

          return sendEmailVerification(auth.currentUser);

       }

  const updateUserProfile=(profile)=>{
     
    return updateProfile(auth.currentUser,profile);
  }

  const googleLogOut=()=>{
    setLoding(true);
      return signOut(auth);
   }

        

     useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      
       console.log("abe");
       if( currentUser===null || currentUser.emailVerified){
        setUser(currentUser);
       }
      
       setLoding(false);
   
   });
   //when component unMount
      return ()=>{
        unSubscribe();
      }

     },[])
    const authInfo={
      
         user,
       providerLogin,
       googleLogOut,
        createUser,
        emailVarified,
        singIn,
        loding,
        setLoding,
        updateUserProfile
    
    };
    return (
     
        <div>
           <AuthContext.Provider value={authInfo}>
           {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;