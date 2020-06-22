import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MainNavigator from './AppNavigation.js';
import TabNavigator from './TabNavigator.js';

import DrawerContainer from '../DrawerContainer/DrawerContainer.js'

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props => <DrawerContainer navigation = {props.navigation}/>}
    >
      <Drawer.Screen name='Tab' component={TabNavigator} />
    </Drawer.Navigator>
  )

}