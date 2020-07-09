import React, {Component, memo } from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import StarReview from 'react-native-star-review';
import StarRating from 'react-native-star-rating';
import { ThemeColors } from 'react-navigation';
import { theme } from '../core/theme'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeLiked: false
    };
  }

  likeToggled() {
    this.setState({
      recipeLiked: !this.state.recipeLiked
    });
  }

  render() {
    const likedHeartIconName = this.state.recipeLiked ? "heart" : "heart-outline"
    return(
      <View style={styles.recipeItem}>
        <Image 
          style={styles.recipeImg}
          source={{
            url: this.props.url
          }}
        />
        <View style={styles.recipeContent}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={styles.recipeTitle}>Chicken Tikka</Text>
            <MaterialCommunityIcons name={likedHeartIconName} size={20} color={"red"} onPress={() => this.likeToggled()}/>
          </View>
          <StarReview
            ratings={4}
            stars={5}
            starColor={theme.colors.primary}
            reviews={30}
            reviewsText="reviews"
          />
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
    marginTop: 10,
    marginHorizontal: 10
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
    paddingBottom: 5,
    marginTop: 5
  },
  recipeDescription: {

  }
})

export default memo(RecipeItem);