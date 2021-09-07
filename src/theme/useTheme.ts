import { Colors, Theme } from "../types/Theme"

const colors: Colors = {
  primary1: "#FFFFFF", // white text
  primary2: "#1A2339", // navbar background
  primary3: "#0D0B26", // dark mode background
  primary4: "#4076FF", // loading screen blue
  primary5: "rgba(255, 255, 255, 0.23)",
}

const theme: Theme = {
  colors,
}

function useTheme() {
  return theme
}

export default useTheme
