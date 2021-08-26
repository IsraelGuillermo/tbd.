import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import JarsAndHatsScreen from "../../screens/DashboardScreen"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="JarsAndHats" component={JarsAndHatsScreen} />
    </Tab.Navigator>
  )
}

export default Tabs
