import React from "react"
import { SvgXml } from "react-native-svg"

interface Props {
  height?: number
  width?: number
  variant: string
  size?: number
}

export default function SvgIcon({ height, width, variant, size = 16 }: Props) {
  return <SvgXml xml={variant} width={width ?? size} height={height ?? size} />
}
