import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
export default function () {
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <Text style={{ color: "white", alignSelf: "center", marginTop: "50%" }}>
        {" "}
        Waiting
      </Text>
    </View>
  );
}
