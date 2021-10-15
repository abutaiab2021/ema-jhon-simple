import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();//export korte hobe

const AuthProvider = ({children}) => {//for advance system
    // const {children} = props;//old system

    const allContexts =  useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;