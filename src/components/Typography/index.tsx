import React from "react"
import { Text, TextProps, TextStyle } from "react-native"
import { useTypeStyles } from "../../hooks/useTypedStyles"

export type TypographyKeys =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "caption1"
  | "caption2"
  | "regular"

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
