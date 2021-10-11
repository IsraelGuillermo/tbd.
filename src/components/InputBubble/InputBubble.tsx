import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { useTheme } from "../../theme"
import Row from "../Row"

interface Props {
  placeholder: string
  width: number
}

export function InputBubble({ placeholder, width }: Props) {
  const theme = useTheme()
  const styles = StyleSheet.create({
    buble: {
      height: 36,
      borderRadius: 40,
      backgroundColor: theme.colors.secondary8,
      justifyContent: "center",
      alignItems: "center",
    },
    textInput: {
      color: theme.colors.primary1,
      fontFamily: theme.fonts.Poppins,
    },
  })
  return (
    <View style={[styles.buble, { width: width }]}>
      <Row>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.primary5}
          style={styles.textInput}
        />
      </Row>
    </View>
  )
}
