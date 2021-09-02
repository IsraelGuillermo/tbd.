import React from "react"
import { StyleSheet, Text, View } from "react-native"
import RecentDrawCard from "../../components/RecentDrawCard"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0B26",
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 36,
    alignSelf: "flex-start",
    paddingTop: 68,
    paddingLeft: 32,
  },
  text: {
    color: "white",
    fontSize: 21,
    alignSelf: "flex-start",
    paddingBottom: 15,
  },
  recentContainer: {
    height: 80,
    justifyContent: "flex-end",
    width: "80%",
  },
})
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dashboard</Text>
      <View style={styles.recentContainer}>
        <Text style={styles.text}>Recent Draws</Text>
        <RecentDrawCard />
      </View>
    </View>
  )
}
