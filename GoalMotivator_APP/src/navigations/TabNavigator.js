import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import MainNavigator from './AppNavigation.js';
import Setting from './Setting.js';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


export default function TabNavigator(){
    
   return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Home') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'Setting') {
        iconName = focused
        ? 'ios-list-box'
        : 'ios-list';
      }

  return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'blue',
      }}
    >
        <Tab.Screen name="Home" component={MainNavigator} />
        <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
   )
}