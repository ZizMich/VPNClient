import { Modal, Text, TouchableOpacity, View, StyleProp, ViewStyle, TextStyle, StyleSheet } from "react-native";

export default function ModalInfo({
  modalVisible,
  modalText,
  onClose,
  colors
}: {
  modalVisible: boolean;
  modalText: string;
  onClose: () => void;
  colors:{title:string, container:string, button:string}

  
})
 {
  const style = StyleSheet.create({
    title:{
     fontSize: 18,
     fontWeight: "bold",
     color:colors.title
    },
    modalButton:{
      width:60,
      marginTop:"10%",
      alignSelf:"center",
      alignItems:"center",
      height:30,
      borderRadius:5,
      backgroundColor:colors.button,
      
    },
  modalConttainer:{
    alignItems:"center",
    width: 300,
    padding: 20,
    backgroundColor: colors.container,
    borderRadius: 10,
  },


});
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
          style={style.modalConttainer}
        >
          <Text style={style.title}>
            {modalText}
          </Text>
          <TouchableOpacity style={style.modalButton} onPress={onClose}>
            <Text style={style.title}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
