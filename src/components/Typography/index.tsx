import React from "react"
import { Text, TextProps, TextStyle } from "react-native"
import { useTypeStyles } from "../../hooks/useTypedStyles"

export type TypographyKeys =
  | "heading1"
  | "heading2"
  | "heading3"
  | "subHeading1"
  | "subHeading2"
  | "title"
  | "regular"
  | "buttonLabel"

interface Props extends TextProps {
  children: React.ReactNode
  style?: TextStyle
  variant?: TypographyKeys
}

export default function Typography({
  children,
  variant,
  style,
  ...rest
}: Props) {
  const styles = useTypeStyles()
  const typeStyle = styles[variant || "regular"]

  return (
    <Text style={[typeStyle, style]} {...rest}>
      {children}
    </Text>
  )
}
