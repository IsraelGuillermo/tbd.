import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import SvgIcon from "../components/SvgIcon"
import HomeScreen from "../screens/HomeScreen"
import IndecisiveFriendsScreen from "../screens/IndecisiveFriendsScreen"
import JarsAndHatsScreen from "../screens/JarsAndHatsScreen"
import NotificationsScreen from "../screens/NotificationsScreen"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0D0B26",
          borderRadius: 8,
        },
      }}
      initialRouteName={"Home"}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <SvgIcon variant="home" />,
        }}
      />
      <Tab.Screen
        name="JarsAndHats"
        component={JarsAndHatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <SvgIcon variant="jars" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={IndecisiveFriendsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <SvgIcon variant="profile" />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <SvgIcon variant="bell" />,
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
