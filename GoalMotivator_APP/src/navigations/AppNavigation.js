import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomedHeader from '../components/Header.js';
import Home from '../components/Home.js';
import ChrisBio from "../components/AboutUs//ChrisBio.js";
import wucBio from "../components/AboutUs//wuckBio.js";
import QingtianMei from "../components/AboutUs/QingtianMei.js";
import HarrisRipp from "../components/AboutUs/HarrisRipp.js";
import MyProfile from "../components/MyProfile.js";
import Challenges from "../components/Challenges.js";
import SignUp from "../components/SignUp.js";
import AboutUs from "../components/AboutUs/AboutUs.js";
import Proofs from "../components/Proofs.js";
import LearnMore from "../components/LearnMore.js";
import AddChallenges from "../components/AddChallenges.js"

const Stack = createStackNavigator();

export default function MainNavigator({props}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ header: props => <CustomedHeader name="Home" navigation={props.navigation} /> }} />
      <Stack.Screen name="About Us" component={AboutUs} options={{ header: props => <CustomedHeader name="About" navigation={props.navigation} /> }} />
      <Stack.Screen name="ChrisBio" component={ChrisBio} options={{ header: props => <CustomedHeader name="Chris" navigation={props.navigation} /> }}/>
      <Stack.Screen name="wucBio" component={wucBio} options={{ header: props => <CustomedHeader name="Wuc" navigation={props.navigation} /> }}/>
      <Stack.Screen name="QingtianMei" component={QingtianMei} options={{ header: props => <CustomedHeader name="Mei" navigation={props.navigation} /> }}/>
      <Stack.Screen name="HarrisRipp" component={HarrisRipp} options={{ header: props => <CustomedHeader name="Harris" navigation={props.navigation} /> }}/>
      <Stack.Screen name="Challenges" component={Challenges} options={{ header: props => <CustomedHeader name="Challenges" navigation={props.navigation} /> }}/>
      <Stack.Screen name="MyProfile" component={MyProfile} options={{ header: props => <CustomedHeader name="MyProfile" navigation={props.navigation} /> }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ header: props => <CustomedHeader name="SignUp" navigation={props.navigation} /> }}/>
      <Stack.Screen name="Proofs" component={Proofs} options={{ header: props => <CustomedHeader name="Proofs" navigation={props.navigation} /> }}/>
      <Stack.Screen name="LearnMore" component={LearnMore} options={{ header: props => <CustomedHeader name="Learn More" navigation={props.navigation} /> }}/>
      <Stack.Screen name="AddChallenge" component={AddChallenges}  options={{ header: props => <CustomedHeader name="Add Challenge" navigation={props.navigation} /> }}/>

    </Stack.Navigator>
  )
}




console.disableYellowBox = true;
