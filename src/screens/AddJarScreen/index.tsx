import { useNavigation } from "@react-navigation/native"
import { Formik } from "formik"
import React from "react"
import { StyleSheet, TouchableHighlight, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import * as Yup from "yup"
import Row from "../../components/Row"
import SvgIcon from "../../components/SvgIcon"
import { useTheme } from "../../theme"
import InitialValues from "../../types/initialValues"
import { AddJarForm } from "./AddJarForm"

export default function AddJarScreen() {
  const theme = useTheme()
  const navigation = useNavigation()
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
    backArrow: {
      width: "100%",
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
  })
  const initialValues: InitialValues["JarInformation"] = {
    title: "",
    iconName: "",
  }
  const validationSchema: Yup.SchemaOf<InitialValues["JarInformation"]> =
    Yup.object({
      title: Yup.string(),
      iconName: Yup.string(),
    })

  function onSubmit(values: InitialValues["JarInformation"]) {
    const { title, iconName } = values

    if (title && iconName) {
      const variables = {
        title,
        iconName,
      }

      console.log(variables)
    }
  }
  console.log(initialValues.title)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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

          <AddJarForm />
        </ScrollView>
      </View>
    </Formik>
  )
}
