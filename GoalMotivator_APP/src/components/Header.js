import React from "react";
import {Header, Icon} from "react-native-elements";


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