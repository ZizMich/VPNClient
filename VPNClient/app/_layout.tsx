import React from 'react';
import { Stack } from "expo-router";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import { LanguageProvider } from '@/components/ui/LanguageProvider';
export default function App() {
  return (
    <LanguageProvider>
    <ThemeProvider>
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false, statusBarHidden:true, animation:"slide_from_left"}}/>
        <Stack.Screen name="settings" options={{headerShown:false,statusBarHidden:true, animation:"slide_from_right"}}/>

    </Stack>
    </ThemeProvider>
    </LanguageProvider>

  );
}