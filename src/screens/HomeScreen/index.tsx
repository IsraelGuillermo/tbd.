import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins"
import { AppLoading } from "expo"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Card } from "../../components/Card"
import Icon from "../../components/Icon"
import RecentDrawCard from "../../components/RecentDrawCard"
import Row from "../../components/Row"

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <Row
        style={{
          paddingHorizontal: 32,
          paddingTop: 68,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.headerText]}>Dashboard</Text>
        <Icon iconName="setting" />
      </Row>
      <Row>
        <View style={styles.activeContainer}>
          <Text style={styles.text}>Active Jars</Text>
          <Card
            backgroundColor="green"
            title="Testing"
            width="80%"
            icon={"home"}
          />
        </View>
      </Row>

      <View style={styles.recentContainer}>
        <Text style={styles.text}>Recent Draws</Text>
        <RecentDrawCard />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(8, 14, 33, 0.96)",
    flex: 1,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 36,
    alignSelf: "flex-start",
    fontFamily: "Poppins_400Regular",
  },
  text: {
    color: "white",
    fontSize: 21,
    alignSelf: "flex-start",
    paddingBottom: 15,
    fontFamily: "Poppins_400Regular",
  },
  recentContainer: {
    height: "70%",
    justifyContent: "flex-start",
    width: "80%",

    paddingVertical: 20,
  },
  activeContainer: {
    height: "100%",
    justifyContent: "flex-start",
    width: "85%",
    paddingVertical: 20,
  },
})
