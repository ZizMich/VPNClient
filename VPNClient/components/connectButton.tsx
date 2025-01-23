import React, { useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import i18n from "@/locales/i18n";

interface ConnectButtonProps {
  onPress: () => void;
  colors: {
    mainButton: string;
    title: string;
  };
  isConnecting?: boolean;
  isConnected?: boolean;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({
  onPress,
  colors,
  isConnecting,
  isConnected,
}) => {
  const opacity = useRef(new Animated.Value(1)).current;
  function renderText() {
    if (isConnected) {
      return i18n.t("btn-disconnect");
    } else if (isConnecting) {
      return i18n.t("btn-connecting");
    } else {
      return i18n.t("btn-connect");
    }
  }
  const style = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.title,
    },
    mainButton: {
      backgroundColor: colors.mainButton,
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
  });
  useEffect(() => {
    if (isConnecting) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [isConnecting]);

  const stopAnimation = () => {
    opacity.stopAnimation();
    opacity.setValue(1);
  };

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <TouchableOpacity
      style={[
        style.mainButton,
        isConnecting ? { opacity: 0.2 } : {},
        isConnected ? { backgroundColor: "red" } : {},
      ]}
      onPress={() => {
        if (!isConnecting) {
          onPress();
        }
      }}
    >
      <Animated.Text style={[style.title, { opacity }]}>
        {renderText()}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default ConnectButton;
