import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import wucImage from '../assets/wucimage.png';

export default function wuckBio({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={wucImage} style={styles.logo}/>
        <Text>Chongkai Wu</Text>
      </View>
    );
  }

  const styles=StyleSheet.create({
    container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
    },
    logo: {
         width: 305,
         height: 159,
         marginBottom: 10,
    }
 });
  