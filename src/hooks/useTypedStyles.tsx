import { StyleSheet } from "react-native"
import useTheme from "../theme/useTheme"

export function useTypeStyles() {
  const { colors, fonts } = useTheme()

  const typeStyles = StyleSheet.create({
    h1: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: 64,
      lineHeight: 72,
      color: colors.primary1,
    },
    h2: {
      fontFamily: fonts.HattonRegular,
      fontWeight: "500",
      fontSize: 24,
      lineHeight: 30,
      color: colors.primary1,
    },
    h3: {
      fontFamily: fonts.KarlaRegular,
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: 21,
      color: colors.primary1,
    },
    h4: {
      fontFamily: fonts.KarlaRegular,
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 21,
      textTransform: "uppercase",
      color: colors.primary1,
    },
    h5: {
      fontFamily: fonts.KarlaRegular,
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 16,
      color: colors.primary1,
    },
    caption1: {
      fontFamily: fonts.KarlaRegular,
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: 12,
      color: colors.primary2,
    },
    caption2: {
      fontFamily: fonts.KarlaRegular,
      fontWeight: "normal",
      fontSize: 8,
      lineHeight: 11,
      color: colors.primary2,
    },
    regular: {
      fontFamily: fonts.KarlaRegular,
      fontWeight: "normal",
      fontSize: 16,
      lineHeight: 21,
      color: colors.primary1,
    },
  })

  return typeStyles
}
