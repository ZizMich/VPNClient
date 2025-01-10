import { Image, Text, TouchableOpacity, Platform, View } from "react-native";
import styles from "@/constants/Styles";
import AccordionList from "@/components/AccordionList";
export default function HomeScreen() {
  const servers = [{
    name: "🇺🇸 Server 1",
    subtitle: "Server 1 description",
    avatar_url: require("../assets/images/react-logo.png"),
  },
  {
    name: "🇨🇦 Server 2",
    subtitle: "Server 1 description",
    avatar_url: require("../assets/images/react-logo.png"),
  }
];
  return (
    <View style={styles.mainBg}>
      <AccordionList list={servers}></AccordionList>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainText}>Ebobo</Text>
      </TouchableOpacity>
    </View>
  );
}
