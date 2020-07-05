import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';


import {
  LoginHomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  HomeScreen,
  MyAccountScreen,
} from "./screens";


// const LoginStack = createStackNavigator(
//   {
//     HomeScreen,
//     LoginScreen,
//     RegisterScreen,
//     ForgotPasswordScreen,
//     AuthLoadingScreen
//   },
//   {
//     initialRouteName: "AuthLoadingScreen",
//     headerMode: "none",
//   }
// );

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;

  let iconName;  
  if (routeName === 'Home') {
    iconName = `home${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
  } else if (routeName === 'Account') {
    iconName = `account${focused ? '' : '-outline'}`;
  }
  
  return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
      }),
    },
    Account: {
      screen: MyAccountScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Account",
      })
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)


const RootNavigator = createStackNavigator(
  {
    LoginHomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    AuthLoadingScreen,
    TabNavigator
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);


export default createAppContainer(RootNavigator);


