export interface Colors {
  primary1: string
  primary2: string
  primary3: string
  primary4: string
  primary5: string
  secondary1: string
  secondary2: string
  secondary3: string
  secondary4: string
  secondary5: string
  secondary6: string
}
export interface ThemeFonts {
  HattonLight: "HattonLight"
  HattonRegular: "HattonRegular"
  HattonSemiBold: "HattonSemiBold"
  KarlaRegular: "KarlaRegular"
  KarlaBold: "KarlaBold"
  KarlaBoldItalic: "KarlaBoldItalic"
  KarlaItalic: "KarlaItalic"
  KwotIcons: "KwotIcons"
  AdditionalIcons: "AdditionalIcons"
}

export interface Theme {
  colors: Colors
  fonts: ThemeFonts
}
