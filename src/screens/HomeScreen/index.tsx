import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Card } from "../../components/Card"
import Icon from "../../components/Icon"
import RecentDrawCard from "../../components/RecentDrawCard"
import Row from "../../components/Row"

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
  },
  text: {
    color: "white",
    fontSize: 21,
    alignSelf: "flex-start",
    paddingBottom: 15,
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
export default function HomeScreen() {
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
        <Text style={styles.headerText}>Dashboard</Text>
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
