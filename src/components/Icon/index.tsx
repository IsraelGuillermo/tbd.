import React from "react"
import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import SvgIcon from "../SvgIcon"

interface Props {
  iconName: keyof SvgIcons
  backgroundColor?: string
}

export default function Icon({ iconName, backgroundColor }: Props) {
  const styles = StyleSheet.create({
    background: {
      borderRadius: 50,
      backgroundColor: backgroundColor,
      height: 38,
      width: 38,
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
