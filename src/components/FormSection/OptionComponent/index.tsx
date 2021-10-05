import React from "react"
import { StyleSheet, View } from "react-native"
import { useTheme } from "../../../theme"
import { SvgIcons } from "../../../types/SvgIcons"
import SvgIcon from "../../SvgIcon"
import Typography from "../../Typography"

interface Props {
  actionDescription: string
  icon: keyof SvgIcons
}

export function OptionComponent({ actionDescription, icon }: Props) {
  const theme = useTheme()
  const styles = StyleSheet.create({
    container: {
      width: 93,
      height: 125,
      backgroundColor: theme.colors.secondary7,
      borderRadius: 16,
    },
    iconContainer: {
      width: 93,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    actionDescription: {
      width: 93,
      height: 25,
      borderBottomEndRadius: 16,
      borderBottomStartRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.secondary8,
    },
  })
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SvgIcon variant={icon} size={21} />
      </View>
      <View style={styles.actionDescription}>
        <Typography variant={"subHeading1"}>{actionDescription}</Typography>
      </View>
    </View>
  )
}
