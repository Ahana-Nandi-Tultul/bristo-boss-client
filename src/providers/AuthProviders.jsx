import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscripe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Auth Provider: ', currentUser);
            if(currentUser){
                axios.post('http://localhost:3000/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    console.log(data)
                    localStorage.setItem('access-token-Bristo', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token-Bristo');
            }
        });
        return () => unsubscripe();
    }, [])

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth)
    }
    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        } )
    }
    const authInfo= {
        user,
        loading,
        createUser,
        login,
        logout,
        updateUserInfo,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;