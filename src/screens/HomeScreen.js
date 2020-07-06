import React, {Component, memo } from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';


import Background from "../components/Background";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import RecipeItem from "../components/RecipeItem"




// const HomeScreen = () => (
//   <Background>
//     <Header>Home Screen</Header>
//   </Background>
// );


// export default memo(HomeScreen);

class HomeScreen extends Component {
  render() {
    return(
      <View style={{flex: 1, width: 100 + "%", height: 100 +"%"}}>
        <View style={styles.tempNav}>
          <Text>RecipeApp</Text>
        </View>
        <View style={styles.tempSearch}>
          <Text>Search   </Text>
          <UselessTextInput style={styles.tempSearchBar}/>
        </View>
        <View style={styles.recipeDisplay}>
          <RecipeItem/>
          <RecipeItem/>
          <RecipeItem/>
        </View>
      </View>
    );
  }
}

function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{ height: 60+"%", width:50+"%", borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 +"%",
    height: 56,
    marginTop: 40,
    backgroundColor: "cyan",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  tempSearch: {
    flexDirection: "row",
    width: 100 +"%",
    height: 56,
    backgroundColor: "red",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  recipeDisplay: {
    paddingHorizontal: 10
  },
  recipeItem: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgb(200,200,200)",
    height: 180,
    flexDirection: "row",
    padding: 10
  },
  recipeImg: {
    width:150,
    height: 160,
    alignSelf: "center",
    borderRadius: 7
  },
  recipeContent: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  recipeChef: {
    fontSize: 15,
    fontStyle: "italic",
    paddingBottom: 5
  },
  recipeDescription: {

  }
})

export default memo(HomeScreen);