import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { useState } from "react"
import { View } from "react-native"
import ActivityNav from "../components/ActivityNav"
import SvgIcon from "../components/SvgIcon"
import HomeScreen from "../screens/Dashboard"
import IndecisiveFriendsScreen from "../screens/IndecisiveFriendsScreen"
import JarsAndHatsScreen from "../screens/JarsAndHatsScreen"
import NotificationsScreen from "../screens/NotificationsScreen"

const Tab = createBottomTabNavigator()
const Tabs = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#0D0B26",
            borderRadius: 8,
            height: 80,
          },
        }}
        initialRouteName={"Home"}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <SvgIcon variant="home" size={24} />,
          }}
        />
        <Tab.Screen
          name="JarsAndHats"
          component={JarsAndHatsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <SvgIcon variant="jars" size={24} />,
          }}
        />
        <Tab.Screen
          name="Add"
          component={View}
          options={{
            tabBarIcon: () => <SvgIcon variant="video" size={24} />,
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault()
              setShowModal(!showModal)
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={IndecisiveFriendsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <SvgIcon variant="profile" size={24} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <SvgIcon variant="bell" size={24} />,
          }}
        />
      </Tab.Navigator>
      <ActivityNav visible={showModal} onPress={() => setShowModal(false)} />
    </>
  )
}

export default Tabs
