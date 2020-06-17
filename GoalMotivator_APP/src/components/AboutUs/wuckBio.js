import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import wucImage from '../../assets/profiles/wucimage.png';
import { Paragraph } from 'react-native-paper';

export default function wuckBio({ navigation }) {
    return (
      <View style={styles.container}>
        <Image source={wucImage} style={styles.logo}/>
        <Text>Chongkai Wu</Text>
        <Text>School: Brandeis University</Text>
        <Text>Major: Economics and Computer Science </Text>
        <Text>Experience: </Text>
        <Text>June 2017 – July 2017 </Text>
        <Text>Assistant Analyst Intern	Shanghai, China  </Text>
        <Paragraph>•	Conducted analysis over 3 main competitors’ sales strategy and future 
          development in Alternative Fuel Vehicles from China and Japan for Business Development and Alliance 
          Management department resulting in higher understanding of competitive landscape
          </Paragraph>
        <Paragraph>•	Synthesized and analyzed sales data for different models of mainstream hybrid and 
          plug-in electronic automobiles from several domestic competitors necessary 
          to develop sales strategy for future international and domestic market development  
          </Paragraph> 
      </View>
    );
  }

  const styles=StyleSheet.create({
    container: {
         flex: 1,
         alignItems: 'flex-start',
         justifyContent: 'flex-start',
    },
    logo: {
         width: 350,
         height: 350,
         marginBottom: 10,
    }
 });
  