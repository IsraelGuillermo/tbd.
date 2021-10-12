import { StyleSheet } from "react-native"
import useTheme from "../theme/useTheme"

export function useTypeStyles() {
  const { colors, fonts } = useTheme()

  const typeStyles = StyleSheet.create({
    heading1: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: 24,
      color: colors.primary1,
    },
    heading2: {
      fontFamily: fonts.Poppins,
      fontWeight: "500",
      fontSize: 14,
      color: colors.primary1,
    },
    heading3: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 16,
      color: colors.primary1,
    },
    subHeading1: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 10,
      color: colors.primary1,
    },
    subHeading2: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 11,
      color: colors.primary5,
    },
    title: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 12,
      color: colors.primary1,
    },
    regular: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: 24,
      color: colors.primary1,
    },
    buttonLabel: {
      fontFamily: fonts.Poppins,
      fontWeight: "600",
      fontStyle: "normal",
      fontSize: 12,
      color: colors.primary1,
    },
  })

  return typeStyles
}
