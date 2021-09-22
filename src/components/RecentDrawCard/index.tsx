import React from "react"
import { StyleSheet, View } from "react-native"
import Icon from "../Icon"
import Row from "../Row"
import Typography from "../Typography"

interface Props {
  title: string
  date: string
}

export default function RecentDrawCard({ date, title }: Props) {
  const styles = StyleSheet.create({
    card: {
      height: 65,
      width: 311,
      backgroundColor: "transparent",
      borderBottomColor: "rgba(255, 255, 255, 0.23)",
      borderBottomWidth: 1,
    },
  })

  return (
    <View style={styles.card}>
      <Row style={{ justifyContent: "space-between" }}>
        <Row>
          <View>
            <Icon iconName="film" backgroundColor="#EB5757" />
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              padding: 7,
              height: "100%",
            }}
          >
            <Typography variant={"title"}>{title}</Typography>
            <Typography variant={"subHeading2"} style={{ paddingTop: 6 }}>
              {date}
            </Typography>
          </View>
        </Row>

        <View>
          <Icon iconName="union" />
        </View>
      </Row>
    </View>
  )
}
