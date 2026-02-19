import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'ua' | 'en';

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'ua',
    setLang: () => { },
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem('figura_lang');
        return (saved === 'en' || saved === 'ua') ? saved : 'ua';
    });

    useEffect(() => {
        localStorage.setItem('figura_lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);
