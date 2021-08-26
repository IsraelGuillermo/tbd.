import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4076FF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 45,
  },
})

export default function JarsAndHatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jars and Hats</Text>
    </View>
  )
}
