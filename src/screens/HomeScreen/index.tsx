import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins"
import { AppLoading } from "expo"
import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { Card } from "../../components/Card"
import Icon from "../../components/Icon"
import RecentDrawCard from "../../components/RecentDrawCard"
import Row from "../../components/Row"
import { SvgIcons } from "../../types/SvgIcons"

interface data {
  title: string
  icon: keyof SvgIcons
  backgroundColor: string
}

interface recentCardData {
  title: string
  date: string
}
export default function HomeScreen() {
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

  const recentCardData: recentCardData[] = [
    { title: "testing 1", date: "08.13.21 | You" },
    { title: "testing 2", date: "08.13.21 | You" },
    { title: "testing 3", date: "08.13.21 | You" },
    { title: "testing 4", date: "08.13.21 | You" },
    { title: "testing 5", date: "08.13.21 | You" },
    { title: "testing 6", date: "08.13.21 | You" },
    { title: "testing 7", date: "08.13.21 | You" },
    { title: "testing 8", date: "08.13.21 | You" },
    { title: "testing 9", date: "08.13.21 | You" },
  ]

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
          <FlatList
            data={DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                backgroundColor={item.backgroundColor}
                title={item.title}
                icon={item.icon}
                width={250}
              />
            )}
          />
        </View>
      </Row>

      <View style={styles.recentContainer}>
        <Text style={styles.text}>Recent Draws</Text>
        <FlatList
          data={recentCardData}
          renderItem={({ item }) => (
            <RecentDrawCard title={item.title} date={item.date} />
          )}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(8, 14, 33, 0.96)",
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
    paddingTop: 20,
    paddingBottom: 130,
  },
  activeContainer: {
    height: "100%",
    justifyContent: "flex-start",
    width: "85%",
    paddingVertical: 20,
    // flex: 1,
  },
})
