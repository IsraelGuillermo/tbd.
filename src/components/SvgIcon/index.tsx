import React from "react"
import { SvgXml } from "react-native-svg"
import { useSvgIcons } from "../../hooks/useSvgIcon"
import { SvgIcons } from "../../types/SvgIcons"

interface Props {
  height?: number
  width?: number
  variant: keyof SvgIcons
  size?: number
  color?: string
  onPress?: () => void
}

export default function SvgIcon({
  height,
  width,
  variant,
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
