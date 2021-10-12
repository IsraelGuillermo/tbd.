import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Button, StyleSheet, TouchableHighlight, View } from "react-native"
import Row from "../../components/Row"
import SvgIcon from "../../components/SvgIcon"
import Typography from "../../components/Typography"
import { useTheme } from "../../theme"

export default function CoinScreen() {
  const navigation = useNavigation()
  const theme = useTheme()
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary3,
      flex: 1,
      alignItems: "center",
    },

    header: {
      height: "15%",
      justifyContent: "center",
      width: "100%",
      top: 36,
    },
    centerBox: {
      alignItems: "center",
      height: 100,
      width: "50%",
      justifyContent: "center",
    },
    outerBox: {
      alignItems: "flex-start",
      height: 100,
      width: "25%",
      justifyContent: "center",
      paddingLeft: 12,
    },
    coinBox: {
      height: "85%",
      width: "100%",
    },
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Row style={{ justifyContent: "space-evenly" }}>
          <View style={styles.outerBox}>
            <TouchableHighlight
              style={{
                height: 32,
                width: 32,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.goBack()}
            >
              <SvgIcon variant={"backArrow"} />
            </TouchableHighlight>
          </View>
          <View style={styles.centerBox}>
            <Typography variant={"heading1"}>Flip a Coin</Typography>
          </View>
          <View style={styles.outerBox} />
        </Row>
      </View>
      <View style={styles.coinBox}>
        <Button title={"Flip"} onPress={() => console.log("Clicked")} />
      </View>
    </View>
  )
}
