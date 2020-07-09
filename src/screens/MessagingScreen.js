import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import {createBottomTabNavigator} from 'react-navigation-tabs';

const MessagingScreen = () => (
  <Background>
    <Header>Messages</Header>
  </Background>
);

export default memo(MessagingScreen);