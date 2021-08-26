import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import LoadingScreen from "../screens/LoadingScreen"
import ProblemSolverScreen from "../screens/ProblemSolverScreen"
import BottomTabNavigator from "./BottomTabNavigator"

export default function RootNavigator() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="ProblemSolver" component={ProblemSolverScreen} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
