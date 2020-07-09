import React, { memo } from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../core/theme';

const HeaderLogo = () => (
  <View style={styles.outer}>
    <MaterialCommunityIcons name={"chef-hat"} size={29} color={theme.colors.primary}/>
    <Text style={styles.text}>NomNom</Text>
  </View>
);

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    marginLeft: 5,
    color: theme.colors.primary,
    // fontFamily: "Galada-Regular"
  }
});

export default memo(HeaderLogo);
