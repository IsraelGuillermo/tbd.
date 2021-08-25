import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4076FF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tbd: {
    color: "#70E1FF",
    fontSize: 45,
  },
})

export default function LoadingScreen() {
  const navigation = useNavigation()
  setTimeout(() => {
    navigation.navigate("ProblemSolver")
  }, 3000)
  return (
    <View style={styles.container}>
      <Text style={styles.tbd}>tbd.</Text>
    </View>
  )
}
