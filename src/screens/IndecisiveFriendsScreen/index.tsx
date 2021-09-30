import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NewItemModal } from "../../components/NewItemModal"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 45,
  },
})
export default function IndecisiveFriendsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Indecisive Friends</Text>
      <NewItemModal title="Movies" />
    </View>
  )
}
