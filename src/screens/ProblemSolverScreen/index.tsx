import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0B26",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#70E1FF",
    fontSize: 45,
  },
})

export default function ProblemSolverScreen() {
  const navigation = useNavigation()
  setTimeout(() => {
    navigation.navigate("Home")
  }, 3000)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>the problem for indicisive people. </Text>
    </View>
  )
}
