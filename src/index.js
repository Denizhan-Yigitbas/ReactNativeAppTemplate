import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component } from 'react';
import Text from 'react-native';

import { mdiClipboardList } from '@mdi/js';

import {
  LoginHomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  AuthLoadingScreen,
  Dashboard,
  HomeScreen,
  MyAccountScreen,
  MessagingScreen
} from "./screens";

import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderLogo from "./components/HeaderLogo";
import MessageIcon from "./components/MessageIcon";


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;

  let iconName;  
  if (routeName === 'FindRecipe') {
    iconName = `book-open${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
  } else if (routeName === 'Account') {
    iconName = `account${focused ? '' : '-outline'}`;
  }
  
  return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    FindRecipe: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Recipes",
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
    initialRouteName: "FindRecipe",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

const testStack = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: <HeaderLogo></HeaderLogo>,
          headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("MessagingScreen")}>
              <MessageIcon/>
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 13,
          }
        };
      }
    },
    MessagingScreen: {
      screen: MessagingScreen,
      navigationOptions: {
        title:"Messages",
      }
    }
  },
  {

  }
);



const RootNavigator = createStackNavigator(
  {
    LoginHomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    AuthLoadingScreen,
    testStack
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode:  "none"
  }
);


export default createAppContainer(RootNavigator);


