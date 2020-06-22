import React, { Component } from "react";
import {Header, Icon} from "react-native-elements";
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
          navigation.navigate('Home');
        }}
      /> }
      />
    )
}