import { ListItem } from "@rneui/themed";
import { Icon, Avatar } from "@rneui/base";
import { ReactNode, useState } from "react";
import { StyleSheet } from "react-native";
import i18n from "../locales/i18n";
import { useContext } from "react";
import { picktheme } from "@/constants/Styles";
import { ThemeContext } from "@/components/ui/ThemeProvider";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
interface ListItemData {
  name: string;
  id: string | number;
}

interface AccordionListProps {
  list: ListItemData[];
  expanded?: boolean;
  divider?: boolean;
  setExpanded?: Function;
  onPress?: (option: string|number) => void;
  children?: ReactNode;
  title?: string;
  contentStyle: {
    container: StyleProp<ViewStyle>;
    title: StyleProp<TextStyle>;
  };
  style?: StyleProp<ViewStyle>;
}

export default function AccordionList({
  divider,
  children,
  onPress,
  style,
  contentStyle,
  title,
  list,
  expanded,
  setExpanded,
}: AccordionListProps) {
  if (expanded == undefined || setExpanded == undefined) {
    [expanded, setExpanded] = useState(false);
  }
  const theme = useContext(ThemeContext);
  const [selectedItem, setSelectedItem] = useState(title);
  const contentBordered = [contentStyle.container, { borderRadius: 10 }];
  const contentTopBordered = [
    contentStyle.container,
    { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
  ];
  const contentBottomBordered = [
    contentStyle.container,
    { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  ];

  const decideStyles = (index: number) => {
    if (list.length !== index + 1) {
      return contentStyle.container;
    }
    return contentBottomBordered;
  };

  return (
    <ListItem.Accordion
      style={style}
      content={
        <>
          <ListItem.Content style={{ flexDirection: "row" }}>
            {children}
            <ListItem.Title style={contentStyle.title}>
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
          <ListItem.Content>
            <ListItem.Title style={contentStyle.title}>
              {item.name}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ListItem.Accordion>
  );
}
