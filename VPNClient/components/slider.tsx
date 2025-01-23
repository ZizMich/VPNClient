import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Slider, Text, Icon } from "@rneui/themed";
import { Timer } from "lucide-react-native";
type SlidersComponentProps = {
  colors: {
    background: string;
    thumb: string;
  };
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  onValueSet: () => void;
};
const Sliders: React.FunctionComponent<SlidersComponentProps> = ({
  colors,
  value,
  setValue,
  onValueSet,
}) => {
  const [showNumber, setShowNumber] = useState(false);
  const styles = StyleSheet.create({
    contentView: {
      width: "100%",
      backgroundColor: colors.background,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      height: 60,
    },
    slider: {
      width: "95%",
    },
    thumb: {
      backgroundColor: colors.thumb,
      borderRadius: 40,
      width: 40,
      height: 40,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      alignSelf: "center",
    },
  });
  return (
    <>
      <View style={styles.contentView}>
        <Text style={styles.text}>Timout limit</Text>
        <Slider
          onSlidingStart={() => {
            setShowNumber(true);
          }}
          onSlidingComplete={() => {
            setShowNumber(false);
            onValueSet();
          }}
          style={styles.slider}
          value={value}
          onValueChange={setValue}
          maximumValue={360}
          minimumValue={0}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 8, backgroundColor: "red" }}
          thumbProps={{
            children: (
              <View>
                <View style={styles.thumb}>
                  <Timer color="white" size={30}></Timer>
                </View>
                {showNumber ? <Text style={styles.text}>{value}</Text> : <></>}
              </View>
            ),
          }}
        />
      </View>
    </>
  );
};

export default Sliders;
