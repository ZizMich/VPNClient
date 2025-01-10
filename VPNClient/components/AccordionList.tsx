import { ListItem } from '@rneui/themed';
import { Icon, Avatar } from '@rneui/base';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
interface ListItemData {
  name: string;
  subtitle: string;
  avatar_url: string;
}

interface AccordionListProps {
  list: ListItemData[];
}


export default function AccordionList({ list }: AccordionListProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select Server");
  const decideStyles=(index:number)=>{
    if(list.length!=index+1){
      return styles.container;
    }
    return styles.container1;
  }



  return (
    <ListItem.Accordion 
      content={
        <>
          <ListItem.Content style={{width:100}}>
            <ListItem.Title style={styles.title}>{selectedItem}</ListItem.Title>
          </ListItem.Content>
        </>
      }
      containerStyle={expanded ? styles.content : styles.content1}
  

      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      {list.map((item, index) => {
        return(
        <ListItem  containerStyle={decideStyles(index)} key={index} onPress={() => {setSelectedItem(item.name); setExpanded(false)}} bottomDivider>
          <ListItem.Content >
            <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
            <ListItem.Subtitle style={styles.title}>{item.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>);}
)}
    </ListItem.Accordion>
  );
}
const styles = StyleSheet.create({
  content: {
    marginTop:"10%",
    width: "70%",
    zIndex:1001,

    alignSelf: "center",
    backgroundColor:"#333333",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
    
  },
  content1: {
    marginTop:"10%",
    zIndex:1001,

    width: "70%",

    alignSelf: "center",
    backgroundColor:"#333333",
    borderRadius: 10,
  },
  container:{
    zIndex:1001,
    backgroundColor:"#333333",
    width: "70%",
    position:"relative",
    alignSelf: "center",
  },
  container1:{
    position:"relative",
    zIndex:1001,
    backgroundColor:"#333333",
    width: "70%",
    alignSelf: "center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  title:{
   fontSize: 18,
   fontWeight: "bold",
   color:"#FFFFFF"
  },
});