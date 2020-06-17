import React, { Component } from "react";
import {Header, Icon} from "react-native-elements";
// import CustomedSideBar from "./SideBar.js";
import { Text, View, Button } from 'react-native';


export default function CustomedHeader({name, navigation}) {
    return (
        <Header
        leftComponent={ <Icon
          name = 'menu'
          color = 'white'
          onPress={() => navigation.openDrawer()}
        />}
        centerComponent={{ text: name, style: { color: '#fff' } }}
        rightComponent={ <Icon
        name = 'home'
        color = 'white'
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Home');
        }}
      /> }
      />
    )
}