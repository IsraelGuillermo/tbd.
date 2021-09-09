import React from "react"
import { StyleSheet, View, ViewStyle } from "react-native"

interface Props {
  children: React.ReactNode
  style?: ViewStyle
}

export default function Row({ children, style }: Props) {
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  })
  return <View style={[styles.row, style]}>{children}</View>
}
