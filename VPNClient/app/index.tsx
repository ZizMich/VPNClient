import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { picktheme } from "@/constants/Styles";
import ServerList from "@/components/serverList";
import SettingsButton from "@/components/settingsButton";
import i18n from "../locales/i18n";
import ConnectButton from "@/components/connectButton";
import { useContext } from "react";
import { ThemeContext } from "@/components/ui/ThemeProvider";
import { useEffect } from "react";
import { startOvpn, stopOvpn } from "@/service/vpnservice";
import ModalInfo from "@/components/modalInfo";
import { getConfig, getServers, getVpn } from "../api/api";
import { ping } from "../service/ping";
export default function HomeScreen() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("HomeScreen must be used within a ThemeProvider");
  }
  const [theme, setTheme] = themeContext;
  const [servers, setServers] = useState<{id:number,name:string}[]>([]);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [modalText, setModalText] = useState(i18n.t("err"));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedServer, setSelectedServer] = useState(1);
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  useEffect(() => {
    const fetchServersAndPing = async () => {
      try {
        const servers:{id:number,name:string}[] = await getServers();
        let newList:{id:number,name:string,ping:number}[] = [];
        servers.forEach(async (element) => {
          const config = await getConfig(element.id);
          const pingResult = await ping(config);
          newList.push({id:element.id, name:element.name, ping: pingResult });
          console.log(element);
        });
        setServers(newList);

        
      } catch (error) {
        console.error("Error fetching servers or pinging:", error);
      }
    };

    fetchServersAndPing();
  }, []);
  const style = picktheme(theme);
  const onWait = () => {
    setConnected(false);
    setConnecting(true);
  };
  const onError = (error: any) => {
    setConnecting(false);
    setConnected(false);
    setModalVisible(true);
    setModalText(i18n.t(error.message));
  };
  const onConnected = () => {
    setConnecting(false);
    setConnected(true);
  };

  return (
    <SafeAreaView  style={{        
      backgroundColor:style.background.color,
      flex:1,
      height:'100%',
      zIndex:-2,}}>
      <ModalInfo
        modalVisible={modalVisible}
        modalText={modalText}
        colors = {style.modal}
        onClose={() => {
          setModalVisible(false);
        }}
      />

      <ServerList
        list={servers}
        expanded={accordionExpanded}
        colors={style.serverList}
        setExpanded={setAccordionExpanded}
        onPress={(option: number) => {
          setSelectedServer(option);
        }}
      />

      <ConnectButton
        isConnected={connected}
        isConnecting={connecting}
        colors={style.connectButton}
        onPress={async () => {
          setAccordionExpanded(false);
          if (!connected) {
            setConnecting(true);
            await startOvpn(selectedServer, onWait, onConnected, onError);
          } else {
            setConnecting(false);
            setConnected(false);
            await stopOvpn();
          }
        }}
      ></ConnectButton>

      <SettingsButton colors={style.settingsButton} />
    </SafeAreaView>
  );
}
