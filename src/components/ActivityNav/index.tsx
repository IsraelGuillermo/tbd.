import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../../theme"

export default function ActivityNav() {
  const theme = useTheme()
  const styles = StyleSheet.create({
    mainContainer: {
      height: 88,
      width: 312,
      backgroundColor: theme.colors.primary2,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      height: 88,
      width: 104,
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      color: theme.colors.primary1,
      fontSize: 12,
    },
    text: {
      color: theme.colors.primary1,
      fontSize: 11,
    },
  })
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Coin Flip</Text>
        <Text style={styles.text}>Single-Use</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Coin Flip</Text>
        <Text style={styles.text}>Single-Use</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Coin Flip</Text>
        <Text style={styles.text}>Single-Use</Text>
      </View>
    </View>
  )
}
