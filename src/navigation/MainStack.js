import BottomTabNav from "./BottomTabNav"
import { withNavigation } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import React, { Component } from 'react';


import {
  MessagingScreen
} from "../screens";


import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderLogo from "../components/HeaderLogo";
import MessageIcon from "../components/MessageIcon";

const MainStack = createStackNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNav,
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
    initialRouteName: "BottomTabNavigator"
  }
);

export default withNavigation(MainStack)