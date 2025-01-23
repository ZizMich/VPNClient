import settingsButton from "@/components/settingsButton";
import { StyleSheet } from "react-native";
export function picktheme(theme: string) {
  switch (theme) {
    case "arctic":
      return arctic1;
    case "dark":
      return dark1;

    default:
      return arctic1;
  }
}
const arctic1 = {
  background:{
    color:"#031019"
  },
  serverList: {
    title: "#FFFFFF",
    container: "#3a566c",
  },
  connectButton: {
    title: "#FFFFFF",
    mainButton: "#2a465c",
  },
  modal: {
    title: "#FFFFFF",
    container: "#2a465c",
    button: "#1a364c",
  },
  settingsList: {
    title: "#FFFFFF",
    container: "#132029",
  },
  settingsButton:{
    color:"#2a465c"
  },
  slider:{
    background:"#132029",
    thumb:"#2a465c"
  }
};

const dark1 = {
  background:{
    color:"#000000"
  },
  serverList: {
    title: "#FFFFFF",
    container: "#444444",
  },
  connectButton: {
    title: "#FFFFFF",
    mainButton: "#333333",
  },
  modal: {
    title: "#FFFFFF",
    container: "#555555",
    button: "#333333",
  },
  settingsList: {
    title: "#FFFFFF",
    container: "#333333",
  },
  settingsButton:{
    color:"#333333"
  },
  slider:{
    background:"#333333",
    thumb:"#555555"
  }
};


const dark = StyleSheet.create({
  settingsContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#444444",
  },
  content: {
    marginTop: "10%",
    width: "70%",
    zIndex: 1001,

    alignSelf: "center",
    backgroundColor: "#3a566c",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  flatlist: {
    backgroundColor: "#132019",
    color: "black",
  },

  container1: {
    position: "relative",
    zIndex: 1001,
    backgroundColor: "#444444",
    width: "70%",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  mainButton: {
    backgroundColor: "#333333",
    padding: 10,
    borderRadius: 100,
    width: 200,
    height: 200,
    zIndex: -1,
    justifyContent: "center",
    alignItems: "center",
    bottom: "50%",

    marginLeft: 100,
    position: "absolute",
  },
  mainBg: {
    backgroundColor: "#000000",
    // marginTop:"-20%",
    height: "100%",
    zIndex: -2,
  },
  mainText: {
    color: "#AAAAAA",
  },
  modalConttainer: {
    alignItems: "center",
    width: 300,
    padding: 20,
    backgroundColor: "#333333",
    borderRadius: 10,
  },
  modalButton: {
    width: 60,
    marginTop: "10%",
    alignSelf: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 5,
    backgroundColor: "#555555",
  },
  settings: {
    backgroundColor: "#333333",
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
