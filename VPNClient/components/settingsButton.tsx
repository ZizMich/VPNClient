import i18n from "../locales/i18n"
import { TouchableOpacity, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleProp } from "react-native";
export default function ({style }: {style?:StyleProp<ViewStyle>}){;
    return(
        <TouchableOpacity style={style} onPress={()=>router.push("/settings")}>
          <FontAwesome name="cog" size={30}></FontAwesome>
        </TouchableOpacity>
    );
}