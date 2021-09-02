import React, { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

interface Props {
  children: ReactNode
  height?: number
  size?: number
}

export default function Row({ children, height, size = 45 }: Props) {
  const styles = StyleSheet.create({
    row: {
      //   backgroundColor: "white",
      display: "flex",
      width: "100%",
      flexDirection: "row",
      height: height ?? size,
      alignItems: "center",
    },
  })
  return <View style={styles.row}>{children}</View>
}
