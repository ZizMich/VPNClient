import { ListItem } from "@rneui/themed";
import { ReactNode, useState } from "react";
import { StyleSheet } from "react-native";

interface ListItemData {
  name: string;
  id: string ;
}

interface AccordionListProps {
  list: ListItemData[];
  expanded?: boolean;
  setExpanded?: Function;
  onPress?: (option: string) => void;
  children?: ReactNode;
  title?: string;
  colors:{title:string, container:string };
  
}

export default function SettingsList({
  children,
  onPress,
  colors,
  title,
  list,
  expanded,
  setExpanded,
}: AccordionListProps) {
  if (expanded == undefined || setExpanded == undefined) {
    [expanded, setExpanded] = useState(false);
  }
  const styles = StyleSheet.create({
    settingsContainer: {
      width: "100%",
      height: 60,
      backgroundColor: colors.container,
    },
    title:{
     fontSize: 18,
     fontWeight: "bold",
     color: colors.title,
    },

});
  const [selectedItem, setSelectedItem] = useState(title);
  const contentBordered = [styles.settingsContainer, { borderRadius: 10 }];

  const contentTopBordered = [styles.settingsContainer, { borderTopLeftRadius: 10, borderTopRightRadius: 10,}]


  const contentBottomBordered = [styles.settingsContainer, { borderBottomBottomRadius: 10, borderBottomRightRadius: 10,}]


  const decideStyles = (index: number) => {
    if (list.length !== index + 1) {
      return styles.settingsContainer;
    }
    return contentBottomBordered;
  };

  return (
    <ListItem.Accordion
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
          bottomDivider={false}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.title}>
              {item.name}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ListItem.Accordion>
  );

}
