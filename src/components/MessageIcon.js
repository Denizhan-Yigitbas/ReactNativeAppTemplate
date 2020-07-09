import React, { memo } from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { withBadge } from 'react-native-elements' 
import Icon from 'react-native-ionicons'
import IonIcon from 'react-native-vector-icons/Ionicons';

// const MessagesBadge = withBadge(5)(Icon)

const MessageIcon = () => (
  <MaterialCommunityIcons name={"message-outline"} size={30}/>
);

export default memo(MessageIcon);
