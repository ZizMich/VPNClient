import { Image, Text, TouchableOpacity, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useContext } from "react";
import AccordionList from "@/components/accordionList";
import { picktheme } from "@/constants/Styles";
import { router } from "expo-router";
import { ThemeContext } from "@/components/ui/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import i18n from "@/locales/i18n";
import { StyleSheet } from "react-native";
export default function HomeScreen() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("HomeScreen must be used within a ThemeProvider");
  }

  const [theme, setTheme] = themeContext;
  const style = picktheme(theme);
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
    <SafeAreaView style={style.mainBg}>
      <TouchableOpacity
        onPress={() => {
          router.push("/");
        }}
      >
        <FontAwesome
          style={{ marginLeft: 10, marginBottom: "10%" }}
          name="arrow-left"
          color="white"
          size={40}
        ></FontAwesome>
      </TouchableOpacity>
      <ScrollView style={{padding:10 }} >
        <AccordionList
          title="select language"
          contentStyle={{
            container: style.settingsContainer,
            title: style.title,
          }}
          list={languageOptions}
          onPress={(selectedOption)=>{
              i18n.locale = String(selectedOption);

            }
          }
        > 
          <FontAwesome name="language" color="white" size={22}></FontAwesome>
        </AccordionList>
        <View style={{height:5}} />
        <AccordionList
          title={i18n.t("sel-theme")}
          contentStyle={{
            container: style.settingsContainer,
            title: style.title,
          }}
          list={themeOptions}
          onPress={
            selectedOption => {
              AsyncStorage.setItem("theme", String(selectedOption));
              setTheme(String(selectedOption))
            }
          }
        >
          <FontAwesome name="pencil" color="white" size={22}></FontAwesome>
        </AccordionList>
      </ScrollView>
    </SafeAreaView>
  );
}
