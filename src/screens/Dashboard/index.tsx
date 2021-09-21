import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Card } from "../../components/Card"
import Icon from "../../components/Icon"
import RecentDrawCard from "../../components/RecentDrawCard"
import Row from "../../components/Row"
import Typography from "../../components/Typography"
import { useTheme } from "../../theme"
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
  const theme = useTheme()
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary3,
      alignItems: "center",
      flex: 1,
    },
    headerText: {
      alignSelf: "flex-start",
      paddingBottom: 15,
    },
    recentContainer: {
      height: "70%",
      justifyContent: "flex-start",
      width: "80%",
      paddingTop: 20,
      flex: 1,
    },
    activeContainer: {
      height: "100%",
      justifyContent: "flex-start",
      width: "100%",
      paddingVertical: 10,
      paddingLeft: 32,
      flex: 1,
    },
  })
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

  return (
    <>
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
          <Typography variant={"heading1"}>Dashboard</Typography>
          <Icon iconName="setting" />
        </Row>
        <Row>
          <View style={styles.activeContainer}>
            <Typography variant={"heading2"}>Active Jars</Typography>
          </View>
        </Row>
        <Row>
          <View>
            <FlatList
              keyExtractor={({ title }) => `${title}-item`}
              contentContainerStyle={{
                paddingLeft: 32,
              }}
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
          <Typography variant={"heading2"} style={styles.headerText}>
            Recent Draws
          </Typography>
          <FlatList
            keyExtractor={({ title }) => `${title}-item`}
            data={recentCardData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <RecentDrawCard title={item.title} date={item.date} />
            )}
          />
        </View>
      </View>
    </>
  )
}
