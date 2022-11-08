import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // email signUp method
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // email signIn method 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signIn method 
    const googleSignInUser = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // sign out 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }



    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        signUpUser,
        signInUser,
        googleSignInUser,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;