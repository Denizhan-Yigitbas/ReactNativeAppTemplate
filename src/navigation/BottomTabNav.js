import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { Component, memo } from 'react';

import {
  HomeScreen,
  MyAccountScreen,
} from "../screens";

import { withNavigation } from 'react-navigation';


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

const BottomTabNav = createBottomTabNavigator(
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

export default withNavigation(BottomTabNav);