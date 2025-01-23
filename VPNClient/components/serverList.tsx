import { ListItem } from "@rneui/themed";
import { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import i18n from "@/locales/i18n";
import { SignalHigh } from 'lucide-react-native';
import { SignalLow } from 'lucide-react-native';
import { SignalMedium } from 'lucide-react-native';
import { SignalZero } from 'lucide-react-native';
interface ListItemData {
  ping?: number;
  name: string;
  id: number;
}

interface AccordionListProps {
  list: ListItemData[];
  expanded?: boolean;
  divider?: boolean;
  setExpanded?: Function;
  onPress?: (option: number) => void;
  children?: ReactNode;
  colors: { title: string; container: string };
}

export default function ServerList({
  divider,
  children,
  onPress,
  colors,
  list,
  expanded,
  setExpanded,
}: AccordionListProps) {
  if (expanded == undefined || setExpanded == undefined) {
    [expanded, setExpanded] = useState(false);
  }
  function decideIcon(ping?:number){
    if(ping){
      if(ping<=50){
        return <SignalHigh color="#00FF00" size={30} />
      }
      else if(ping<=100){
        return <SignalMedium color="#FFFF00" size={30} />
      }
      else if(ping<=200){
        return <SignalLow color="#FFFF00" size={30} />
      }
      else{
        return <SignalZero color="#FF0000" size={20} />
      }
    }
  }
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      zIndex: 1001,
      backgroundColor: colors.container,
      width: "70%",
      alignSelf: "center",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.title,
      flex: 1,
    },
    icon: {
      marginLeft: 10,
    },
  });
  const [selectedItem, setSelectedItem] = useState(i18n.t("sel-server"));
  const contentBordered = [styles.container, { borderRadius: 10 }];

  const contentTopBordered = [
    styles.container,
    { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  ];

  const contentBottomBordered = [
    styles.container,
    { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  ];

  const decideStyles = (index: number) => {
    if (list.length !== index + 1) {
      return styles.container;
    }
    return contentBottomBordered;
  };

  return (
    <ListItem.Accordion
      style={{marginTop:"10%"}}
      content={
        <>
          <ListItem.Content style={{ flexDirection: "row" }}>
            {children}
            <ListItem.Title style={styles.title}>
              {selectedItem}
            </ListItem.Title>
          </ListItem.Content>
        </>
      }
      containerStyle={expanded ? contentTopBordered : contentBordered}
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      {list.map((item, index) => (
        <ListItem
          containerStyle={[decideStyles(index)]}
          key={index}
          onPress={() => {
            setSelectedItem(item.name);
            setExpanded(false);
            if (onPress != undefined) {
              onPress(item.id);
            }
          }}
          bottomDivider={divider}
        >
          <ListItem.Content style={{ flexDirection: "row", alignItems: "center" }}>
            <ListItem.Title style={styles.title}>
              {item.name}
            </ListItem.Title>
              {decideIcon(item.ping)}
          </ListItem.Content>
        </ListItem>
      ))}
    </ListItem.Accordion>
  );
}