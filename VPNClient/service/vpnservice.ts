import RNSimpleOpenvpn, {
  addVpnStateListener,
  removeVpnStateListener,
  VpnEventParams,
} from "react-native-simple-openvpn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getVpn } from "../api/api";
export async function startOvpn(serverCode:number,onWait?:()=>void, onConnected?:()=>void, onError?:(error:any)=>void) {
  const req =  await getVpn(serverCode);
  let timeout = Number(await AsyncStorage.getItem("settings-timeout"));
  if (!timeout) {
    timeout = 40;
  }
  const timeoutInMilliseconds = timeout * 1000;
  try {
    
    const connectionPromise = new Promise<void>((resolve, reject) => {
      addVpnStateListener((state) => {
        console.log(state)
        if (state.message === "CONNECTED") {
          if (onConnected) {
            onConnected();
          }
          removeVpnStateListener()
          resolve();
        } else if (state.message === "WAIT") {
          if (onWait) {
            onWait();
          }
        }
          else if (state.message === "NOPROCESS") {
            reject(new Error("CONNECTION-ERROR"))
        }
      });
      RNSimpleOpenvpn.connect({
        ovpnString: req.configuration,
        providerBundleIdentifier: "com.anonymous.VPNClient",
      }).catch(reject); // Handle connection errors
    });

    const timeoutPromise = new Promise<void>((_, reject) =>
      setTimeout(
        () => reject(new Error("TIMEOUT")),
        timeoutInMilliseconds
      )
    );
    
    await Promise.race([connectionPromise, timeoutPromise]);
  } catch ( error ) {
    if (onError) {
      if (error)
      onError(error);
    }
    RNSimpleOpenvpn.disconnect();
    removeVpnStateListener();
  }
}

export async function stopOvpn() {
  await RNSimpleOpenvpn.disconnect();
}
