import React from "react"
import RootNavigator from "../../navigation/RootNavigator"
import { CacheContainer } from "../CacheContainer"

export function App() {
  return (
    <CacheContainer>
      <RootNavigator />
    </CacheContainer>
  )
}
