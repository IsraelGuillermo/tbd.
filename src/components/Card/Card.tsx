import React from "react"
import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import Row from "../Row"
import SvgIcon from "../SvgIcon"
import Typography from "../Typography"

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
      marginVertical: 12,
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
            <Typography variant={"heading2"} style={{ paddingLeft: 10 }}>
              {title}
            </Typography>
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
        <Typography variant={"subHeading1"}>DRAW SLIP</Typography>
      </Row>
    </View>
  )
}
