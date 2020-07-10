import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import Text from 'react-native';


import {
  LoginHomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
} from "./screens";


import {MainStack} from "./navigation"

const LoginSwitch = createSwitchNavigator(
  {
    LoginHomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    AuthLoadingScreen,
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode:  "none"
  }
)
const RootNavigator = createStackNavigator(
  {
    LoginSwitch,
    MainStack
  },
  {
    headerMode:  "none"
  }
);


export default createAppContainer(RootNavigator);


