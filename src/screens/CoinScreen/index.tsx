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

    heads: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      backfaceVisibility: "hidden",
    },
    tails: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      backfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
    },
  })
  const [flipValue] = useState(new Animated.Value(0))

  const [isFlipped, setIsFlipped] = useState(false)

  const interpolateFront = flipValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", `1260deg`],
  })
  const interpolateBack = flipValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "1440deg"],
  })
  const [face, setFace] = useState("")
  const rando = Math.random()
  function handleTouch() {
    let rotationConfig = {
      friction: 10,
      tension: 20,
      useNativeDriver: true,
      toValue: 0,
    }

    if (rando > 0.5) {
      rotationConfig = {
        ...rotationConfig,
        toValue: 0,
      }
      setFace("heads")
    } else {
      rotationConfig = {
        ...rotationConfig,
        toValue: 180,
      }
      setFace("tails")
    }
    Animated.spring(flipValue, rotationConfig).start()
    setIsFlipped(!isFlipped)

    // console.log(isFlipped)
  }
  console.log(face)
  const frontStyle = {
    transform: [{ rotateY: interpolateFront }],
  }
  const backStyle = {
    transform: [{ rotateY: interpolateBack }],
  }
  //   const turn = {
  //     transform: [
  //       {
  //         rotateY: flipValue.interpolate({
  //           inputRange: [0, 180],
  //           outputRange: ["1800deg", `1440deg`],
  //         }),
  //       },
  //     ],
  //   }

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
      <Button title={"Flip"} onPress={handleTouch} />
      <View>
        <>
          <Animated.View style={[styles.heads, frontStyle]}>
            <Typography variant={"heading1"}>Heads</Typography>
          </Animated.View>
          <Animated.View style={[styles.tails, backStyle]}>
            <Typography variant={"heading1"}>Tails</Typography>
          </Animated.View>
        </>
      </View>
    </View>
  )
}
