import React from "react"
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native"
import { useTheme } from "../../theme"
import { SvgIcons } from "../../types/SvgIcons"
import Icon from "../Icon"

export interface IconData {
  iconName: keyof SvgIcons
  backgroundColor: string
}
interface Props {
  visible: boolean
  onPress: () => void
  onIconSelect: (obj: IconData) => void
}

export function IconMenu({ visible, onPress, onIconSelect }: Props) {
  const theme = useTheme()
  const iconData: IconData[] = [
    {
      iconName: "film",
      backgroundColor: theme.colors.secondary5,
    },
    {
      iconName: "creditCard",
      backgroundColor: theme.colors.secondary4,
    },
    {
      iconName: "target",
      backgroundColor: theme.colors.secondary2,
    },
    {
      iconName: "map",
      backgroundColor: theme.colors.secondary1,
    },
    {
      iconName: "zap",
      backgroundColor: theme.colors.secondary6,
    },
    {
      iconName: "sun",
      backgroundColor: theme.colors.secondary3,
    },
  ]
  const styles = StyleSheet.create({
    iconMenu: {
      width: 200,
      height: 125,
      backgroundColor: theme.colors.secondary7,
      borderRadius: 8,
      overflow: "hidden",
      position: "absolute",
      top: 125,
      left: 50,
    },
    background: {
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  })
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.background} onTouchStart={onPress} />
      <View style={styles.iconMenu}>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 8,
          }}
          numColumns={3}
          data={iconData}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={{ borderRadius: 8 }}
              onPress={() => onIconSelect(item)}
              key={item.backgroundColor}
            >
              <Icon
                iconName={item.iconName}
                backgroundColor={item.backgroundColor}
                style={{ margin: 8 }}
                key={item.iconName}
              />
            </TouchableHighlight>
          )}
        />
      </View>
    </Modal>
  )
}
