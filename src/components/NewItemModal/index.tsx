import React from "react"
import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import Icon from "../Icon"
import Row from "../Row"
import SvgIcon from "../SvgIcon"
import Typography from "../Typography"

interface Props {
  title: string
  icon?: keyof SvgIcons
  onPress?: () => void
}

export function NewItemModal({ title, onPress, icon }: Props) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 16,
      backgroundColor: "#21283F",
      height: 144,
      width: 229,
      marginHorizontal: 12,
      marginVertical: 12,
    },

    headerRow: {
      justifyContent: "center",
      alignItems: "center",
    },
    exit: {
      alignItems: "center",
      justifyContent: "flex-end",
      height: "10%",
      paddingTop: 10,
      paddingRight: 10,
    },
    icon: {
      alignItems: "center",
      justifyContent: "center",
      height: "10%",
    },
    drawSlip: {
      width: "100%",
      height: "25%",
      backgroundColor: "#2D344B",
      borderBottomEndRadius: 16,
      borderBottomStartRadius: 16,
      justifyContent: "center",
      alignSelf: "center",
    },
  })
  return (
    <>
      <View style={styles.container}>
        <Row style={styles.icon}>
          <Icon
            iconName={icon || "activityJar"}
            backgroundColor="#EB5757"
            size={48}
          />
        </Row>
        <Row style={styles.exit}>
          <SvgIcon variant="exit" size={17} onPress={onPress} />
        </Row>
        <View style={[styles.headerRow, { padding: 20, height: "65%" }]}>
          <Row>
            <Typography variant={"heading3"}>{`"${title}"`}</Typography>
          </Row>
          <Row>
            <Typography variant={"heading3"}>Has been Added!</Typography>
          </Row>
        </View>
        <Row style={styles.drawSlip}>
          <Typography variant={"subHeading1"}>DRAW SLIP</Typography>
        </Row>
      </View>
    </>
  )
}
