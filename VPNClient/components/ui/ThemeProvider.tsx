import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>];

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>("arctic");

    useEffect(() => {
        async function fetchTheme() {
            const storedTheme = await AsyncStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }

        fetchTheme();
    }, []);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}