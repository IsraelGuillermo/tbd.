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
      lineHeight: 36,
      color: colors.primary1,
    },
    heading2: {
      fontFamily: fonts.Poppins,
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 21,
      color: colors.primary1,
    },
    heading3: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
      color: colors.primary1,
    },
    subHeading1: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 10,
      lineHeight: 12,
      color: colors.primary1,
    },
    subHeading2: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 11,
      lineHeight: 12,
      color: colors.primary5,
    },
    title: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 12,
      color: colors.primary1,
    },
    regular: {
      fontFamily: fonts.Poppins,
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: 24,
      lineHeight: 36,
      color: colors.primary1,
    },
  })

  return typeStyles
}
