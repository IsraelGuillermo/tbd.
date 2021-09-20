import { Colors, Theme } from "../types/Theme"

const colors: Colors = {
  primary1: "#FFFFFF", // white text
  primary2: "#1A2339", // navbar background
  primary3: "#0D0B26", // dark mode background
  primary4: "#4076FF", // loading screen blue
  primary5: "rgba(255,255,255, 0.23)", // white with opacity
  secondary1: "#8B9F10", // Card green
  secondary2: "#7B61FF", // card purple
  secondary3: "#B18862", // card brown
  secondary4: "#5061FF", //card blue
  secondary5: "#EB5757", // card red
  secondary6: "#E29727", //icon yellow
}

const theme: Theme = {
  colors,
  fonts: {
    HattonLight: "HattonLight",
    HattonRegular: "HattonRegular",
    HattonSemiBold: "HattonSemiBold",
    KarlaRegular: "KarlaRegular",
    KarlaBold: "KarlaBold",
    KarlaBoldItalic: "KarlaBoldItalic",
    KarlaItalic: "KarlaItalic",
    KwotIcons: "KwotIcons",
    AdditionalIcons: "AdditionalIcons",
  },
}

function useTheme() {
  return theme
}

export default useTheme
