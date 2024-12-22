import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithCredential, signInWithPopup, signOut } from "firebase/auth";

const AuthContext = createContext({ currentUser: null });

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const login = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {isLoading ? <p>読み込み中</p> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
