import React, {Component, memo } from 'react';
import {
  FlatList, 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput} 
from 'react-native';

import RecipeItem from "../components/RecipeItem"
import { TouchableOpacity } from 'react-native-gesture-handler';

import { withNavigation } from 'react-navigation';

import { SearchBar } from 'react-native-elements';


// const HomeScreen = () => (
//   <Background>
//     <Header>Home Screen</Header>
//   </Background>
// );


// export default memo(HomeScreen);

class HomeScreen extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  _renderPost({item}) {
    return <RecipeItem url={"https://www.chelseasmessyapron.com/wp-content/uploads/2019/05/Chicken-Tikka-Masala-2.jpg"}></RecipeItem>
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const { search } = this.state;
    return(
      <View style={{flex: 1, width: 100 + "%", height: 100 +"%"}}>
        <SearchBar
          placeholder="search for a recipe..."
          onChangeText={this.updateSearch}
          value={search}
          inputContainerStyle={
            {
              backgroundColor: 'white', 
              borderWidth: 1, 
              borderBottomWidth: 1,
              borderRadius: 10,
            }
          }
          containerStyle={
            {
              paddingHorizontal:10, 
              backgroundColor: "white", 
              borderBottomWidth: 0,
              borderTopWidth: 0,
              paddingVertical: 10,
              borderBottomWidth:StyleSheet.hairlineWidth,
              borderBottomColor: "rgb(150,150,150)"
            }
          }
        />
        <View style={styles.recipeDisplay}>
          <FlatList
            data={[
              {key: 'a'}, 
              {key: 'b'}, 
              {key: 'c'}, 
              {key: 'd'}, 
              {key: 'e'}, 
              {key: 'f'}]}
            // keyExtractor={this._keyExtractor}
            renderItem={this._renderPost}
            // showsVerticalScrollIndicator="false"
            scrollIndicatorInsets={{right:0}}
          />
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
  recipeDisplay: {
    // paddingHorizontal: 10,
    flex: 1,
  }
})

export default withNavigation(HomeScreen);