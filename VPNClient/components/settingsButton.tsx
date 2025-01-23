import i18n from "../locales/i18n";
import { TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleProp } from "react-native";
export default function ({ colors }: { colors: { color: string } }) {
  const styles = StyleSheet.create({
    settings: {
      backgroundColor: colors.color,
      width: 50,
      height: 50,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 30,
      right: 30,
    },
  });
  return (
    <TouchableOpacity
      style={styles.settings}
      onPress={() => router.push("/settings")}
    >
      <FontAwesome name="cog" size={30}></FontAwesome>
    </TouchableOpacity>
  );
}
