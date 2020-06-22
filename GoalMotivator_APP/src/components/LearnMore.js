import React from 'react';
import {
  SafeAreaView,
  TouchableHighlight,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import Constants from 'expo-constants';
import challengeData from '../assets/challenges/challengeData.js';
import crossfit from '../assets/challenges/media/crossfit.png';
import MenuButton from './MenuButton/MenuButton';


export function LearnMore({ id, title, src, info, selected, onSelect }) {
  const imageSource = '../assets/' + src;    
  return (
    <TouchableHighlight
      underlayColor = '#f0f'
      onPress={() => onSelect(id)}
    >
    <View style = {styles.container}>
    <Image style={[styles.photo]} source={crossfit}/> 
    <Text style={styles.name}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <MenuButton
            style={styles.button}
            title="Learn More"
            source={require('../assets/icons/category.png')}
            // onPress={() => {
            //   navigation.navigate('About Us');
            //   navigation.closeDrawer();
            // }}
          />
    </View>
    </TouchableHighlight>
  );
}