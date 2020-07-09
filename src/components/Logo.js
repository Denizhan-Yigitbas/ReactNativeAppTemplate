import React, { memo } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../core/theme';

const Logo = () => (
  <View style={styles.outer}>
    <MaterialCommunityIcons name={"chef-hat"} size={80} color={theme.colors.primary}/>
    <Text style={styles.text}>NomNom</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: theme.colors.primary
  },
  outer: {
    flexDirection: "column",
    alignItems: "center"
  }
});

export default memo(Logo);
