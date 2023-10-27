import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"

// Icons 
import SettingsIcon from "../../assets/images/SettingsIcon";
import ChatIcon from "../../assets/images/ChatIcon";
import AlertsIcon from "../../assets/images/AlertsIcon";
import HomeIcon from "../../assets/images/HomeIcon";

// screens 
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import AlertsScreen from "../screens/AlertsScreen";
import Chat from "../screens/ChatScreen";

// screen names
const homeScreenName = "Home";
const settingsName = "Settings";
const alertsName = "Alerts";
const chatName = "Chat";

const Tab = createBottomTabNavigator();

const notSelected = '#F8F5E6'
const selected = '#C4E8F2'

const NavBar = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'teal',
      tabBarInactiveTintColor: 'grey',
      tabBarLabelStyle: {
        color: 'black',
        fontWeight: '900',
      },
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#F8F5E6',
        height: 98,
      },
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'teal'
      }
    }}
      >
      
      <Tab.Screen name={homeScreenName}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon style={{minHeight: 60, minWidth: 60, backgroundColor: focused ? selected : notSelected}}/>
          )
        }} >
        {() => <HomeScreen />}
      </Tab.Screen>

      <Tab.Screen name={alertsName}
        options={{
          tabBarIcon: ({ focused }) => (
            <AlertsIcon style={{minHeight: 60, minWidth: 60, backgroundColor: focused ? selected : notSelected}} />
          )
        }} >
          {() => <AlertsScreen />}
        </Tab.Screen>

      <Tab.Screen name={chatName}
        options={{
          tabBarIcon: ({ focused }) => (
            <ChatIcon style={{minHeight: 60, minWidth: 60, backgroundColor: focused ? selected : notSelected}} />
          )
        }}>
        {() => <Chat />}
        </Tab.Screen>

      <Tab.Screen name={settingsName}
        options={{
          tabBarIcon: ({ focused }) => (
            <SettingsIcon style={{minHeight: 60, minWidth: 60, backgroundColor: focused ? selected : notSelected}}/>
          )
        }}>
          {() => <Settings />}
          </Tab.Screen>
    </Tab.Navigator>
  );
}

export default NavBar;