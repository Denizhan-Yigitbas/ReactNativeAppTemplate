import React, { memo } from "react";
import Background from "../components/Background";
import Header from "../components/Header";

const RecipeScreen = () => (
  <Background>
    <Header>Explain Recipe Here!</Header>
  </Background>
);

export default memo(RecipeScreen);