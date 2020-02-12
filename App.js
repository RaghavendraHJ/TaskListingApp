/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import StartScreen from "./screens/StartScreen";
import CalendarScreen from "./screens/CalendarScreen";
import TaskEditorScreen from "./screens/TaskEditorScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GroupsScreen from "./screens/GroupsScreen";
import TimelineScreen from "./screens/TimelineScreen";
import ListScreen from "./screens/ListScreen";
import OverviewScreen from "./screens/OverviewScreen";
import SideBar from "./components/SideBar";

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function ListStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="TaskEditor" component={TaskEditorScreen} />
    </Stack.Navigator>
  );
}

function CalendarStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="TaskEditor" component={TaskEditorScreen} />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StartScreen} />
      <Drawer.Screen name="Calendar" component={CalendarStack} />
      <Drawer.Screen name="TaskEditor" component={TaskEditorScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Groups" component={GroupsScreen} />
      <Drawer.Screen name="Timeline" component={TimelineScreen} />
      <Drawer.Screen name="List" component={ListStack} />
      <Drawer.Screen name="Overview" component={OverviewScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function StartNavigator() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Introduction" component={IntroductionScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Start" component={MainNavigator} />
    </Stack.Navigator>
  );
}   

export default function App() {
  return (
    <NavigationContainer>
      <StartNavigator/>
    </NavigationContainer>
  );
};