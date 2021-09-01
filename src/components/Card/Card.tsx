import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import SvgIcon from "../SvgIcon"

interface Props {
  title: string
  icon: keyof SvgIcons
  width: string
}

export function Card({ title, icon, width }: Props) {
  const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
    },
    container: {
      borderRadius: 16,
      backgroundColor: "blue",
      height: 170,
      width,
      padding: 15,
    },
    title: {
      color: "white",
      fontSize: 14,
    },
  })
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.row, { width: 120 }]}>
            <SvgIcon variant={icon} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <SvgIcon variant="ellipsis" />
        </View>
        <View
          style={{
            height: 32,
            width: "108.75%",
            backgroundColor: "#2D344B",
            position: "absolute",
            top: 150,
            borderBottomEndRadius: 16,
            borderBottomStartRadius: 16,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            DRAW SLIP
          </Text>
        </View>
      </View>
    </>
  )
}
