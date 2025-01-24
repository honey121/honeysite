import React, { createContext, useContext, useState } from 'react';

const CallbackContext = createContext();

export const useCallbackContext = () => {
    return useContext(CallbackContext);
};

export const CallbackProvider = ({ children }) => {
    const [callback, setCallback] = useState(null);

    return (
        <CallbackContext.Provider value={{ callback, setCallback }}>
            {children}
        </CallbackContext.Provider>
    );
};
