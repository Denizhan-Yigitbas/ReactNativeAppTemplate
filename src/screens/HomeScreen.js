import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";


const HomeScreen = () => (
  <Background>
    <Header>Home Screen</Header>
  </Background>
);


export default memo(HomeScreen);