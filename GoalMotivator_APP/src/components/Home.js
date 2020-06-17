import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View >
      <Button
        title="Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            name:"xz",
            age:19,
          });
        }}
      />
      <Button
        title="About The Developers"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('About Us');
        }}
      />
    </View>
  )
}
