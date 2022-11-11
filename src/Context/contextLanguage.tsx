import React, {createContext, useMemo, PropsWithChildren, useState, useCallback} from 'react';
import en from '../locales/en/translation';
import ua from '../locales/ua/translation';

interface AvailableLanguage {
       [key: string]: {
           [key: string]: string
       }
}

export const TranslationContext = createContext<{
    language: AvailableLanguage;
    toggleLanguage: (value: string) => void;
    setLanguage?: (value: string) => void;
}>({
    language: en,
    toggleLanguage: () => {},
})

export const TranslationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentLanguage, setCurrentLanguage] = useState<AvailableLanguage>(en);

    const toggle = useCallback<(value: string) => void>((value: string) => {
        setCurrentLanguage(value === 'Ukraine' ? ua : en);
    },[]);

    const setLanguage = useCallback<(value: string) => void>((value: string) => {
        setCurrentLanguage(value === 'Ukraine' ? ua : en);
    },[]);

    const memoizedLanguage = useMemo(() => {
        return currentLanguage;
    }, [currentLanguage]);

    return (
        <TranslationContext.Provider value={{
            toggleLanguage: toggle,
            language: memoizedLanguage,
            setLanguage
        }}>
            {children}
        </TranslationContext.Provider>
    );
};