import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Information on The Developers</Text>
        <Button
          title={"About Chris "}
          onPress={() => {navigation.navigate("ChrisBio");}}
        />
        <Button
          title={"About Chongkai "}
          onPress={() => {navigation.navigate("wucBio");}}
        />
         <Button
          title={"About Qingtian Mei "}
          onPress={() => {navigation.navigate("QingtianMei");}}
        />
        <Button
          title={"About Harris Ripp "}
          onPress={() => {navigation.navigate("HarrisRipp");}}
        />
      </View>
  );
}

