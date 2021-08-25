import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import HomeScreen from "../screens/HomeScreen"
import LoadingScreen from "../screens/LoadingScreen"
import ProblemSolverScreen from "../screens/ProblemSolverScreen"

export default function RootNavigator() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="ProblemSolver" component={ProblemSolverScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
