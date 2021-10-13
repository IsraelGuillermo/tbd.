import { SvgIcons } from "./SvgIcons"

interface InitialValues {
  JarInformation: {
    title: string | undefined
    iconName: keyof SvgIcons
  }
}

export default InitialValues
