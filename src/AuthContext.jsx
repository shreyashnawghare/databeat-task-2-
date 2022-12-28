import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const initialState = {
    isLoggedIn: false,
    loginError: null
};

const loginData = (email, password, callback) => {
    console.log("email",email);
    if (email === "task2@gmail.com" && password === "password") {
        
        return callback(null);
    } else {
       
        return callback(new Error("Invalid email and password"));
    }
}

export const ContextProvider = ({children}) => {
    const [state, setUseState] = useState(initialState);

    const loginSuccess = (isLoggedIn) => setUseState({ isLoggedIn });

    const loginError = (loginError) => setUseState({loginError });

    const login = (email, password) => {
        loginSuccess(false);
        loginError(null);

        loginData(email, password, (error) => {
            if (!error) {
                loginSuccess(true);
            } else {
                
                loginError(error);
            }
        });
        
    };

    const logout = () => {
        loginSuccess(false);
        
       
    };
    console.log(state)
    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

