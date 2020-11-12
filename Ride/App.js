import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "./Screen/HomeScreen"
import SignUpScreen from "./Screen/SignUpScreen";
import SignInScreen from "./Screen/SignInScreen";

const App = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "Sign Up",
      headerStyle: { backgroundColor: "#fff" },
      // headerTintColor:"#",
      headerTitleStyle: {
        width: "80%",
        textAlign: "center",
        fontWeight: "bold",
        color: "#00305C",
      },
    },
  },
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      title: "Sign In",
      headerStyle: { backgroundColor: "#fff" },
      // headerTintColor:"#",
      headerTitleStyle: {
        width: "80%",
        textAlign: "center",
        fontWeight: "bold",
        color: "#00305C",
      },
    },
  },
});


export default createAppContainer(App);
