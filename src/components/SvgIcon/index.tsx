import React from "react"
import { SvgXml } from "react-native-svg"
import { useSvgIcons } from "../../hooks/useSvgIcon"
import { SvgIcons } from "../../types/SvgIcons"

interface Props {
  variant: keyof SvgIcons
  height?: number
  width?: number
  size?: number
  color?: string
  onPress?: () => void
}

export default function SvgIcon({
  variant,
  height,
  width,
  size = 16,
  onPress,
}: Props) {
  const icon = useSvgIcons()
  return (
    <SvgXml
      xml={icon[variant]}
      width={width ?? size}
      height={height ?? size}
      onPress={onPress}
    />
  )
}
