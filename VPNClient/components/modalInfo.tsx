import { Modal, Text, TouchableOpacity, View, StyleProp, ViewStyle, TextStyle } from "react-native";

export default function ModalInfo({
  modalVisible,
  modalText,
  onClose,
  style,
}: {
  modalVisible: boolean;
  modalText: string;
  onClose: () => void;
  
  style:{
    title: StyleProp<TextStyle>
    container: StyleProp<ViewStyle>
    button: StyleProp<ViewStyle>

  }
}) {
  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={style.container}
        >
          <Text style={style.title}>
            {modalText}
          </Text>
          <TouchableOpacity style={style.button} onPress={onClose}>
            <Text style={style.title}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
