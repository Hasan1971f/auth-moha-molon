import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    cnst [user, setUser] = useState(null)
    const name = 'Potato alu mia'
    

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged(auth, currentUser=>{
    //     if (currentUser) {
    //         console.log('cuurrently loged user', currentUser)
    //         setUser( currentUser)
    //     }
    //     else{
    //         console.log('No user logged in')
    //         setUser(null)
    //     }
    // })

    const authInfo = {
       name,
       user,
       createUser,
       signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;