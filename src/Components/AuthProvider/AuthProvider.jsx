import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.conf";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [allNews, setAllNews] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setAllNews(data));
    }, []);

    // Create user with email & password
    const registerWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login with email & password
    const loginWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    };

    // LogOut user
    const logOut = () => {
        return signOut(auth);
    };

    // StateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
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