import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useTheme } from "../../theme"
import SvgIcon from "../SvgIcon"

interface Props {
  onPress: () => void
  visible: boolean
}

export default function ActivityNav({ onPress, visible }: Props) {
  const theme = useTheme()
  const styles = StyleSheet.create({
    mainContainer: {
      height: 88,
      width: 312,
      backgroundColor: theme.colors.primary2,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      bottom: 88,
    },
    container: {
      height: 88,
      width: 104,
      justifyContent: "space-evenly",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    headerText: {
      color: theme.colors.primary1,
      fontSize: 12,
    },
    text: {
      color: theme.colors.primary1,
      fontSize: 11,
    },
    line: {
      width: 1,
      height: 88,
      borderWidth: 1,
      borderColor: theme.colors.primary5,
    },
    background: {
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    centered: {
      height: "100%",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  })

  const navigation = useNavigation()
  function goToCoinFlip() {
    navigation.navigate("CoinScreen")
    onPress()
  }
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.centered}>
        <View style={styles.background} onTouchStart={onPress} />

        <View style={styles.mainContainer}>
          <TouchableHighlight onPress={goToCoinFlip}>
            <View style={styles.container}>
              <SvgIcon variant={"dollar"} />
              <Text style={styles.headerText}>Coin Flip</Text>
              <Text style={styles.text}>Single-Use</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.line} />
          <TouchableHighlight onPress={goToCoinFlip}>
            <View style={styles.container}>
              <SvgIcon variant={"baseballCap"} />
              <Text style={styles.headerText}>Hat Draw</Text>
              <Text style={styles.text}>Single-Use</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.line} />
          <TouchableHighlight onPress={goToCoinFlip}>
            <View style={styles.container}>
              <SvgIcon variant={"activityJar"} />
              <Text style={styles.headerText}>Jar Draw</Text>
              <Text style={styles.text}>Multi-Use</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}
