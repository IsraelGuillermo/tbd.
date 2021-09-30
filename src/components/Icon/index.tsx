import React from "react"
import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import SvgIcon from "../SvgIcon"

interface Props {
  iconName: keyof SvgIcons
  backgroundColor?: string
  height?: number
  width?: number
  size?: number
}

export default function Icon({
  iconName,
  backgroundColor,
  height,
  width,
  size = 38,
}: Props) {
  const styles = StyleSheet.create({
    background: {
      borderRadius: 50,
      backgroundColor: backgroundColor,
      width: width ?? size,
      height: height ?? size,
      justifyContent: "center",
      alignItems: "center",
    },
  })
  return (
    <View style={styles.background}>
      <SvgIcon variant={iconName} size={24} />
    </View>
  )
}
