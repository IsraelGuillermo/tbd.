import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface Props {
  title: string
}

export function Card({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: "blue",
    height: 140,
    width: 311,
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: 14,
  },
})
