import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Animated, Button, StyleSheet, View } from "react-native"
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
      alignContent: "center",
      justifyContent: "center",
    },
    coin: {
      width: 100,
      height: 100,
      position: "relative",
      //   backfaceVisibility: "hidden",
    },
    heads: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      position: "absolute",
      //   transform: [{ rotateY: "180deg" }],
      //   flex: 1,
      backfaceVisibility: "hidden",
    },
    tails: {
      position: "absolute",
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      backfaceVisibility: "hidden",
      zIndex: 100,
      //   flex: 1,
    },
  })
  const [rotateAnimation] = useState(new Animated.Value(0))

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0)
    })
  }
  const [turns, setTurns] = useState(0)

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", `1440deg`],
  })
  const animatedStyle = {
    transform: [
      {
        rotateY: interpolateRotating,
      },
    ],
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Row style={{ justifyContent: "space-evenly" }}>
          <View style={styles.outerBox}>
            <SvgIcon
              variant={"backArrow"}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.centerBox}>
            <Typography variant={"heading1"}>Flip a Coin</Typography>
          </View>
          <View style={styles.outerBox} />
        </Row>
      </View>
      <View style={styles.coinBox}>
        <Animated.View style={[animatedStyle, styles.coin]}>
          {turns > 0.5 ? (
            <View style={styles.heads}>
              <Typography variant={"heading1"}>Heads</Typography>
            </View>
          ) : (
            <View style={styles.tails}>
              <Typography variant={"heading1"}>Tails</Typography>
            </View>
          )}
        </Animated.View>

        <Button
          title={"Flip"}
          onPress={() => {
            handleAnimation()
            setTimeout(() => {
              setTurns(Math.random())
            }, 500)
          }}
        />
      </View>
    </View>
  )
}
