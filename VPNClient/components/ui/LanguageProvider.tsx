import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>];
export const LangugeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeProviderProps {
    children: ReactNode;
}
export function LanguageProvider({ children }: ThemeProviderProps) {
    const [lang, setLang] = useState<string>("en");

    useEffect(() => {
        async function fetchTheme() {
            const storedLang = await AsyncStorage.getItem("lang");
            if (storedLang) {
                setLang(storedLang);
            }
        }
        fetchTheme();
    }, []);

    return (
        <LangugeContext.Provider value={[lang, setLang]}>
            {children}
        </LangugeContext.Provider>
    );
}