import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {
  StyleSheet,
  Switch,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { FormSection } from "../../components/FormSection"
import { IconMenu } from "../../components/IconMenu"
import { InputBubble } from "../../components/InputBubble"
import Row from "../../components/Row"
import SvgIcon from "../../components/SvgIcon"
import Typography from "../../components/Typography"
import { useTheme } from "../../theme"

export default function AddJarScreen() {
  const theme = useTheme()
  const navigation = useNavigation()
  const [visible, setVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(!isEnabled)
  const styles = StyleSheet.create({
    view: {
      backgroundColor: theme.colors.primary3,
      flex: 1,
    },
    container: {
      backgroundColor: theme.colors.primary3,
      flex: 1,
      alignItems: "center",
      paddingVertical: 36,
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
      paddingBottom: 8,
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
    optionsInput: {
      color: theme.colors.primary1,
      fontFamily: theme.fonts.Poppins,
    },
  })
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
          <View style={styles.iconContainer}>
            <TouchableHighlight
              style={styles.addIcon}
              onPress={() => setVisible(!visible)}
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
          <Row style={{ marginVertical: 8 }}>
            <Typography variant="heading2">Set number of options</Typography>
          </Row>
          <Row>
            <Switch
              thumbColor={theme.colors.primary1}
              trackColor={{
                true: theme.colors.secondary9,
                false: theme.colors.secondary8,
              }}
              ios_backgroundColor={theme.colors.secondary8}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ marginRight: 8 }}
            />
            {isEnabled ? (
              <InputBubble width={150}>
                <TextInput
                  placeholder={"# of options"}
                  placeholderTextColor={theme.colors.primary5}
                  style={styles.optionsInput}
                />
              </InputBubble>
            ) : (
              <InputBubble width={150}>
                <Typography style={{ fontSize: 14 }} variant="subHeading2">
                  # of options
                </Typography>
              </InputBubble>
            )}
          </Row>
        </View>
        <Row style={{ marginVertical: 16 }}>
          <InputBubble
            width={113}
            style={{ backgroundColor: theme.colors.primary4 }}
            onPress={() => navigation.navigate("AddOptionsScreen")}
          >
            <Typography variant="buttonLabel">Create Jar</Typography>
          </InputBubble>
        </Row>
        <IconMenu visible={visible} onPress={() => setVisible(!visible)} />
      </ScrollView>
    </View>
  )
}
