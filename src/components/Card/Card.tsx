import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import Row from "../Row"
import SvgIcon from "../SvgIcon"

interface Props {
  title: string
  icon: keyof SvgIcons
  width: string | number
  backgroundColor: string
}

export function Card({ title, icon, width, backgroundColor }: Props) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      backgroundColor: backgroundColor,
      height: 150,
      width,
      marginHorizontal: 12,
    },
    title: {
      color: "white",
      fontSize: 14,
    },
    headerRow: {
      justifyContent: "center",
      alignItems: "center",
    },
  })
  return (
    <View style={styles.container}>
      <View style={{ padding: 20, height: "80%" }}>
        <Row style={{ justifyContent: "space-between" }}>
          <Row style={styles.headerRow}>
            <SvgIcon variant={icon} />
            <Text style={[styles.title, { paddingLeft: 10 }]}>{title}</Text>
          </Row>
          <SvgIcon variant="ellipsis" />
        </Row>
      </View>
      <Row
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: "#2D344B",
          borderBottomEndRadius: 16,
          borderBottomStartRadius: 16,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          DRAW SLIP
        </Text>
      </Row>
    </View>
  )
}
