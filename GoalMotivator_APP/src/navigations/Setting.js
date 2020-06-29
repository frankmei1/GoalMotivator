


import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomedHeader from '../components/Header.js';

const Stack = createStackNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        This is a Setting Page. 
      </Text>
    </View>
  );
}

export default function Setting({props}) {
   return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ header: props => <CustomedHeader name="Setting" navigation={props.navigation} /> }}/>
    </Stack.Navigator>
  )
}




console.disableYellowBox = true;
