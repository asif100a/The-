import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.conf";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [allNews, setAllNews] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    // Create user with email & password
    const registerWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    // Login with email & password
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    // LogOut user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };


    useEffect(() => {
        // setLoading(false)
        fetch('news.json')
            .then(res => res.json())
            .then(data => setAllNews(data));
    }, []);

    // StateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authData = {
        allNews,
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        logOut,
        user,
        loading,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;