import React, { createContext, useContext, useState } from 'react';
import { TRANSLATIONS } from '../components/constants/translations';

// Create Context
const LanguageContext = createContext();
// Custom Hook for Language
export const useLanguage = () => useContext(LanguageContext);

// Language Provider Component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Update language
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    // Provide translations and current language
    const t = TRANSLATIONS[language];

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
