import React, { memo } from "react";
import Background from "../components/Background";
import { Button as PaperButton } from "react-native-paper";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import { logoutUser } from "../api/auth-api";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import { theme } from "../core/theme";
import { Avatar } from 'react-native-elements';
import firebase from "firebase/app";

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


const TestScreen2 = () => {
  const user = firebase.auth().currentUser;
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      <View style={styles.body}>
        <Text style={styles.name}> {user.displayName} </Text>
        <Text style={styles.info}> Student at Rice University </Text>
        <Text style={styles.description}> I am learning how to use React Native to develop a mobile app </Text>
      </View>
      <View style={{flex: 1,justifyContent: 'flex-end'}}>
        <LogoutButton mode="outlined" onPress={() => logoutUser()}>
          Logout
        </LogoutButton>
      </View>
    </View>
  )
};


const LogoutButton = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      Logoutstyles.button,
      mode === "outlined" && { backgroundColor: "#EE204D"},
      style
    ]}
    labelStyle={[
      Logoutstyles.text,
      mode === "contained"
    ]}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const Logoutstyles = StyleSheet.create({
  button: {
    width: "90%",
    marginVertical: 10,
    alignSelf: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    color: "white"
  }
});

const styles = StyleSheet.create({
  header:{
    backgroundColor: theme.colors.primary,
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
  },
  body:{
    marginTop:65,
    alignItems: "center"
  },
  name:{
    fontSize:28,
    color: theme.colors.primary,
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: theme.colors.primary,
  },
});

export default memo(TestScreen2);