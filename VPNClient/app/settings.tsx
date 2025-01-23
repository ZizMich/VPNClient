import { Image, Text, TouchableOpacity, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import SettingsList from "@/components/settingsList";
import { picktheme } from "@/constants/Styles";
import { router } from "expo-router";
import { ThemeContext } from "@/components/ui/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { Palette } from "lucide-react-native";
import i18n from "@/locales/i18n";
import Sliders from "@/components/slider";

export default function HomeScreen() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("HomeScreen must be used within a ThemeProvider");
  }
  const [theme, setTheme] = themeContext;
  const style = picktheme(theme);
  const [timerValue, setTimerValue]=useState(0);
  const themeOptions = [
    {
      name: "Arctic",
      id: "arctic"
    },
    {
      name: "Dark",
      id: "dark"
    },
  ];
  const languageOptions = [
    {
      name: "Russian",
      id: "ru"
    },
    {
      name: "German",
      id: "de"
    },
    {
      name: "Korean",
      id:"kr"
    },
    {
      name: "English",
      id:"en"
    },
    {
      name: "Japaneese",
      id: "ja"
    },
  ];

  return (
    <SafeAreaView style={{
      backgroundColor: style.background.color,
      height: "100%",
      zIndex: -2,
    }}>
      <TouchableOpacity
        style={{ marginLeft: 10, marginTop: "10%" }}
        onPress={() => {
          router.back();
        }}
      >
        <FontAwesome
          name="arrow-left"
          color="white"
          size={40}
        ></FontAwesome>
      </TouchableOpacity>
      <ScrollView style={{padding:10 }} >
        <SettingsList
          title={i18n.t("language")}
          colors={style.settingsList}
          list={languageOptions}
          onPress={(selectedOption)=>{
              i18n.locale = String(selectedOption);

            }
          }
        > 
          <FontAwesome name="language" color="white" size={22}></FontAwesome>
        </SettingsList>
        <View style={{height:5}} />
        <SettingsList
          title={i18n.t("sel-theme")}
          colors={style.settingsList}
          list={themeOptions}
          onPress={
            (selectedOption:string) => {
              AsyncStorage.setItem("theme", String(selectedOption));
              setTheme(selectedOption)
            }
          }
        >
          <Palette  size={22} color="white"/>
        </SettingsList>
        <View style={{height:5}} />
        <Sliders onValueSet={()=>console.log('set')} setValue={setTimerValue} value={timerValue} colors={style.slider}></Sliders>
      </ScrollView>
    </SafeAreaView>
  );
}
