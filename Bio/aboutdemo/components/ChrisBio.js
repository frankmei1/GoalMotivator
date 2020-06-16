import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function ChrisBio({ navigation }) {
  return (
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chris Choi</Text>
    </View>
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Brandeis Universiry, Physics and Computer Science Major</Text>
    </View>
  );
}
