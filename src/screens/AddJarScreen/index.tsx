import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, TextInput, TouchableHighlight, View } from "react-native"
import { FormSection } from "../../components/FormSection"
import Row from "../../components/Row"
import SvgIcon from "../../components/SvgIcon"
import Typography from "../../components/Typography"
import { useTheme } from "../../theme"

export default function AddJarScreen() {
  const theme = useTheme()
  const navigation = useNavigation()

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary3,
      flex: 1,
      alignItems: "center",
      paddingVertical: 56,
    },
    formSectionView: {
      marginVertical: 8,
      alignItems: "flex-start",
      width: 311,
    },
    textInput: {
      fontSize: 24,
      color: theme.colors.primary1,
      fontFamily: theme.fonts.Poppins,
    },
    backArrow: {
      width: "100%",
      paddingHorizontal: 16,
    },
    header: {
      paddingTop: 12,
      paddingBottom: 24,
    },
    iconContainer: {
      width: "25%",
      height: 35,
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      width: "75%",
    },
    addIcon: {
      height: 32,
      width: 32,
      borderColor: theme.colors.primary1,
      borderWidth: 1,
      borderStyle: "dashed",
      justifyContent: "center",
      alignItems: "center",
    },
  })
  return (
    <View style={styles.container}>
      <Row style={styles.backArrow}>
        <SvgIcon variant={"backArrow"} onPress={() => navigation.goBack()} />
      </Row>
      <Row style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableHighlight
            style={styles.addIcon}
            onPress={() => console.log("Icon Pressed!")}
          >
            <SvgIcon variant={"cross"} />
          </TouchableHighlight>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Jar Name Here"
            placeholderTextColor={theme.colors.primary5}
            style={styles.textInput}
          />
        </View>
      </Row>
      <View style={styles.formSectionView}>
        <FormSection
          title={"After an Option is Drawn..."}
          option1="Return"
          icon1="return"
          option2="Remove"
          icon2="slash"
          option3="Replace"
          icon3="edit"
        />
      </View>
      <View style={styles.formSectionView}>
        <FormSection
          title={"When no options are left..."}
          option1="Return All"
          icon1="return"
          option2="Archive Jar"
          icon2="slash"
          option3="Replace All"
          icon3="edit"
        />
      </View>
      <View style={[styles.formSectionView, { width: 311 }]}>
        <Typography variant="heading2">Set number of options</Typography>
      </View>
    </View>
  )
}
