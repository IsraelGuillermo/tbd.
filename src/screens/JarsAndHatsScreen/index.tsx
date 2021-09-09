import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { Card } from "../../components/Card"
import Row from "../../components/Row"
import { SvgIcons } from "../../types/SvgIcons"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(8, 14, 33, 0.96)",
    flex: 1,

    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 45,
  },
})
interface data {
  title: string
  icon: keyof SvgIcons
  backgroundColor: string
}

const DATA: data[] = [
  {
    title: "test 1",
    icon: "map",
    backgroundColor: "#8B9F10",
  },
  {
    title: "test 2",
    icon: "zap",
    backgroundColor: "#8B9F10",
  },
  {
    title: "test 3",
    icon: "film",
    backgroundColor: "#8B9F10",
  },
  {
    title: "test 4",
    icon: "creditCard",
    backgroundColor: "#8B9F10",
  },
]

export default function JarsAndHatsScreen() {
  return (
    <View style={styles.container}>
      <Row
        style={{
          paddingHorizontal: 32,
          paddingTop: 68,
          paddingBottom: 32,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.text}>Jars and Hats</Text>
      </Row>
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            backgroundColor={item.backgroundColor}
            title={item.title}
            icon={item.icon}
            width={350}
          />
        )}
      />
    </View>
  )
}
