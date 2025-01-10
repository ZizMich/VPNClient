import React from 'react';
import { Stack } from "expo-router";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import { LanguageProvider } from '@/components/ui/LanguageProvider';
export default function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="settings" options={{headerShown:false}}/>

    </Stack>
    </ThemeProvider>
    </LanguageProvider>

  );
}