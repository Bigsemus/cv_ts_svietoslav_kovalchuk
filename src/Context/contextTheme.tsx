import React, {createContext, useMemo, PropsWithChildren, useState, useCallback} from 'react';
import {themes} from "../utils/constants/themes";

type AvailableThemes = 'light' | 'dark'

interface Theme {
    [key: string]: string,
}

export const ThemeContext = createContext<{
    theme: Theme;
    toggleTheme: () => void;
    setTheme?: (t: AvailableThemes) => void;
}>({
    theme: themes.dark,
    toggleTheme: () => {},
})

export const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('light');

    const toggleTheme = useCallback<() => void>(() => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    },[currentTheme]);

    const setTheme = useCallback<(theme: AvailableThemes) => void>((theme) => {
        setCurrentTheme(theme);
    },[]);

    const memoizedTheme = useMemo<Theme>(() => {
        return themes[currentTheme];
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{
            toggleTheme,
            setTheme,
            theme: memoizedTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};