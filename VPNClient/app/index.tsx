import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { picktheme } from "@/constants/Styles";
import AccordionList from "@/components/accordionList";
import SettingsButton from "@/components/settingsButton";
import i18n from "../locales/i18n";
import ConnectButton from "@/components/connectButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { ThemeContext } from "@/components/ui/ThemeProvider";
import { useEffect } from "react";
import { startOvpn, stopOvpn } from "@/service/vpnservice";
import ModalInfo from "@/components/modalInfo";
import {getServers} from "../api/api";
export default function HomeScreen() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("HomeScreen must be used within a ThemeProvider");
  }
  const [theme, setTheme] = themeContext;
  const [servers, setServers] = useState([]);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [modalText, setModalText] = useState(i18n.t("err"))
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedServer, setSelectedServer] = useState(1);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  useEffect(() => {
   getServers().then((result)=>{ setServers(result);})
  }, []);
  const style = picktheme(theme);
  const onWait = ()=>{
      setConnected(false);
      setConnecting(true);
    }
  const onError = (error: any)=>{
    setConnecting(false);
    setConnected(false);
    setModalVisible(true);
    setModalText(i18n.t(error.message));
    
    }
  const onConnected = ()=>{
      setConnecting(false);
      setConnected(true);
  }

  
  return (
    <SafeAreaView style={style.mainBg}>
      <ModalInfo
        modalVisible={modalVisible}
        modalText={modalText}
        style={{
          title: style.title,
          container: style.modalConttainer,
          button: style.modalButton,
        }}
        onClose={() => {
          setModalVisible(false);
        }}
      />

      <AccordionList
        list={servers}
        title={i18n.t("sel-server")}
        expanded={accordionExpanded}
        contentStyle={{ container: style.container1, title: style.title }}
        setExpanded={setAccordionExpanded}
        onPress={(option:number | string)=>{
          setSelectedServer(Number(option));
        }}
      />

      <ConnectButton
        isConnected={connected}
        isConnecting={connecting}
        style={{ mainButton: style.mainButton, title: style.title }}
        onPress={async () => {
          setAccordionExpanded(false);
          if (!connected) {
            setConnecting(true);
            await startOvpn( selectedServer,onWait,onConnected,onError);
          } else {
            setConnecting(false);
            setConnected(false);
            await stopOvpn();
          }
        }}
      ></ConnectButton>

      <SettingsButton style={style.settings} />
    </SafeAreaView>
  );
}
