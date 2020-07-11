import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";

const MessagingScreen = () => (
  <Background>
    <Header>Messages</Header>
  </Background>
);

export default memo(MessagingScreen);