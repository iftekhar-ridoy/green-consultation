import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    // email signUp method
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // email signIn method 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    // google signIn method 
    const googleSignInUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign out 
    const signOutUser = () => {
        return signOut(auth);
    }



    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        signUpUser,
        updateUserProfile,
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