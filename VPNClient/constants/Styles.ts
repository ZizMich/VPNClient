import {StyleSheet} from "react-native"
export function picktheme(theme: string){
    switch(theme){
        case "arctic":
            return arctic;
        case "dark":
            return dark;

        default:
            return arctic;
    }
}
const arctic = StyleSheet.create({
      settingsContainer: {
        width: "100%",
        height: 60,
        backgroundColor: "#132029",
      },
      flatlist:{
        backgroundColor:"#132019",
        color:"black"
      },


      container1:{
        position:"relative",
        zIndex:1001,
        backgroundColor:"#3a566c",
        width: "70%",
        alignSelf: "center",
      },
      title:{
       fontSize: 18,
       fontWeight: "bold",
       color:"#FFFFFF"
      },
    mainButton:{
        backgroundColor:"#2a465c",
        padding:10,
        borderRadius:100,
        width:200,
        height:200,
        zIndex:-1,
        justifyContent:"center",
        alignItems:"center",
        bottom:"50%",
        marginLeft:100,
        position:"absolute",
    },
    modalConttainer:{
      alignItems:"center",
      width: 300,
      padding: 20,
      backgroundColor: "#2a465c",
      borderRadius: 10,
    },
    mainBg:{
        backgroundColor:"#031019",
        // marginTop:"-20%",
        height:'100%',
        zIndex:-2,
    },
    
    mainText:{
        color:"#AAAAAA",
    },
    modalButton:{
      width:60,
      marginTop:"10%",
      alignSelf:"center",
      alignItems:"center",
      height:30,
      borderRadius:5,
      backgroundColor:"#1a364c",
      
    },
    settings:{
        backgroundColor:"#2a465c",
        width:50,
        height:50, 
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:30,
        right:30
    }
  });

  const dark = StyleSheet.create({
    settingsContainer: {
      width: "100%",
      height: 60,
      backgroundColor: "#444444",
    },
    content: {
        marginTop:"10%",
        width: "70%",
        zIndex:1001,
    
        alignSelf: "center",
        backgroundColor:"#3a566c",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        
        
      },
      flatlist:{
        backgroundColor:"#132019",
        color:"black"
      },

      container1:{
        position:"relative",
        zIndex:1001,
        backgroundColor:"#444444",
        width: "70%",
        alignSelf: "center",
      },
      title:{
       fontSize: 18,
       fontWeight: "bold",
       color:"#FFFFFF"
      },
    mainButton:{
        backgroundColor:"#333333",
        padding:10,
        borderRadius:100,
        width:200,
        height:200,
        zIndex:-1,
        justifyContent:"center",
        alignItems:"center",
        bottom:"50%",

        marginLeft:100,
        position:"absolute",
    },
    mainBg:{
        backgroundColor:"#000000",
        // marginTop:"-20%",
        height:'100%',
        zIndex:-2,
    },
    mainText:{
        color:"#AAAAAA",
    },
    modalConttainer:{
      alignItems:"center",
      width: 300,
      padding: 20,
      backgroundColor: "#333333",
      borderRadius: 10,
    },
    modalButton:{
      width:60,
      marginTop:"10%",
      alignSelf:"center",
      alignItems:"center",
      height:30,
      borderRadius:5,
      backgroundColor:"#555555",
    },
    settings:{
        backgroundColor:"#333333",
        width:50,
        height:50, 
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:30,
        right:30
    },
    
  });