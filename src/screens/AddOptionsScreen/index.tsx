import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { StyleSheet, TextInput, TouchableHighlight, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { InputBubble } from "../../components/InputBubble"
import Row from "../../components/Row"
import SvgIcon from "../../components/SvgIcon"
import Typography from "../../components/Typography"
import { useTheme } from "../../theme"

export default function AddOptionsScreen() {
  const theme = useTheme()
  const navigation = useNavigation()
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary3,
      flex: 1,
      alignItems: "center",
      paddingVertical: 36,
    },
    view: {
      backgroundColor: theme.colors.primary3,
      flex: 1,
    },
    formSectionView: {
      marginVertical: 8,
      alignItems: "flex-start",
    },
    textInput: {
      fontSize: 24,
      color: theme.colors.primary1,
      fontFamily: theme.fonts.Poppins,
    },
    backArrow: {
      width: "100%",
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
    header: {
      paddingTop: 12,
      paddingBottom: 24,
    },

    title: {
      width: "75%",
    },
  })
  const route = useRoute()
  console.log(route)
  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.container}>
        <Row style={styles.backArrow}>
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
        </Row>

        <Row style={styles.header}>
          <View style={{ marginRight: 8 }}>
            <SvgIcon variant={"film"} />
          </View>
          <View style={styles.title}>
            <Typography style={styles.textInput}>Hello</Typography>
          </View>
        </Row>
        <View style={[styles.formSectionView]}>
          <Row style={{ marginVertical: 8 }}>
            <Typography variant="heading2">Add Options</Typography>
          </Row>
          <Row>
            <InputBubble
              width={311}
              style={{
                height: 44,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Row>
                <View
                  style={{
                    width: "75%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 16,
                  }}
                >
                  <TextInput
                    placeholderTextColor="white"
                    placeholder="Type option here and then click +"
                  />
                </View>
                <View
                  style={{
                    width: "25%",
                    alignItems: "flex-end",
                    paddingRight: 8,
                  }}
                >
                  <TouchableHighlight onPress={() => console.log("clicked")}>
                    <SvgIcon variant="add" size={24} />
                  </TouchableHighlight>
                </View>
              </Row>
            </InputBubble>
          </Row>
        </View>
        <View style={[styles.formSectionView, { width: 311 }]}>
          <Row>
            <Typography variant="heading2">Options</Typography>
          </Row>
        </View>
        <Row style={{ marginVertical: 16, position: "absolute", bottom: 56 }}>
          <InputBubble
            width={135}
            style={{ backgroundColor: theme.colors.primary4 }}
            onPress={() => console.log("click")}
          >
            <Typography variant="buttonLabel">Submit Options</Typography>
          </InputBubble>
        </Row>
      </ScrollView>
    </View>
  )
}
