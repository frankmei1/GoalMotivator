
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/DrawerNavigator.js'
import TabNavigator from './src/navigations/TabNavigator.js';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}