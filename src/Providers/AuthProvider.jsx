import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
   
    const authInfo = {
        name: 'nodi er sagor'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



// create context with null as default
// create provider
// set a default value