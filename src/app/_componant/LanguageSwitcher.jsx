import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();
    
    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "ar" : "en";
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    };

    return (
        <button
            onClick={toggleLanguage}
            className="text-[#E6F6F2] bg-primary font-bold border border-primary py-2 rounded-xl px-6"
        >
            {i18n.language === "en" ? "Ar" : "EN"}
        </button>
    );
}

export default LanguageSwitcher;
