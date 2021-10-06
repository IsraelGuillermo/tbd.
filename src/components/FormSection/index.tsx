import React from "react"
import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../types/SvgIcons"
import Row from "../Row"
import Typography from "../Typography"
import { OptionComponent } from "./OptionComponent"

interface Props {
  title: string
  option1: string
  option2: string
  option3: string
  icon1: keyof SvgIcons
  icon2: keyof SvgIcons
  icon3: keyof SvgIcons
}

const styles = StyleSheet.create({
  container: {
    height: 162,
    width: 311,
  },
  title: {
    marginBottom: 12,
  },
  options: {
    justifyContent: "space-between",
  },
})

export function FormSection({
  title,
  option1,
  option2,
  option3,
  icon1,
  icon2,
  icon3,
}: Props) {
  return (
    <View style={styles.container}>
      <Row style={styles.title}>
        <Typography variant="heading2">{title}</Typography>
      </Row>
      <Row style={styles.options}>
        <OptionComponent actionDescription={option1} icon={icon1} />
        <OptionComponent actionDescription={option2} icon={icon2} />
        <OptionComponent actionDescription={option3} icon={icon3} />
      </Row>
    </View>
  )
}
