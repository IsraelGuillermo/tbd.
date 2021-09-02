import React from "react"
import { StyleSheet, View } from "react-native"
import Icon from "../Icon"
import Row from "../Row"

export default function RecentDrawCard() {
  const styles = StyleSheet.create({
    card: {
      height: 56,
      width: 311,
      backgroundColor: "green",
      borderBottomColor: "rgba(255, 255, 255, 0.23)",
      borderBottomWidth: 1,
    },
  })
  return (
    <View style={styles.card}>
      <Row>
        <Icon iconName="film" backgroundColor="#EB5757" />
      </Row>
    </View>
  )
}
