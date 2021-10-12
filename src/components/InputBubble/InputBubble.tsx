import React, { ReactElement } from "react"
import { StyleSheet, TouchableHighlight, View, ViewStyle } from "react-native"
import { useTheme } from "../../theme"
import Row from "../Row"

interface Props {
  children: ChildNode | ReactElement | string
  width: number
  style?: ViewStyle
  onPress?: () => void
}

export function InputBubble({ children, width, style, onPress }: Props) {
  const theme = useTheme()

  const styles = StyleSheet.create({
    buble: {
      height: 36,
      borderRadius: 40,
      backgroundColor: theme.colors.secondary8,
      justifyContent: "center",
      alignItems: "center",
    },
  })
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.buble, style, { width: width }]}>
        <Row>{children}</Row>
      </View>
    </TouchableHighlight>
  )
}
