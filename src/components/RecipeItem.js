import React, {Component, memo } from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

class RecipeItem extends Component {
  render() {
    return(
      <View style={styles.recipeItem}>
        <Image 
          style={styles.recipeImg}
          source={{
            url: "https://www.chelseasmessyapron.com/wp-content/uploads/2019/05/Chicken-Tikka-Masala-2.jpg"
          }}
        />
        <View style={styles.recipeContent}>
          <Text style={styles.recipeTitle}>Chicken Tikka</Text>
          <Text style={styles.recipeChef}>Chef: Denizhan Yigitbas</Text> 
          <Text>Description</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipeItem: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgb(200,200,200)",
    height: 180,
    flexDirection: "row",
    padding: 10,
    marginTop: 10
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

export default memo(RecipeItem);