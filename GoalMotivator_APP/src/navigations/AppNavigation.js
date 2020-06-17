import React from 'react'
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContainer from '../DrawerContainer/DrawerContainer';
import CustomedHeader from '../components/Header.js';
import Home from '../components/Home.js';
import ChrisBio from "../components/AboutUs//ChrisBio.js";
import wucBio from "../components/AboutUs//wuckBio.js";
import QingtianMei from "../components/AboutUs/QingtianMei.js";
import HarrisRipp from "../components/AboutUs/HarrisRipp.js";
import MyProfile from "../components/MyProfile.js";
import Challenges from "../components/Challenges.js";
import SignUp from "../components/SignUp.js";

const Stack = createStackNavigator();

function MainNavigator() {
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
      <Stack.Screen name="Details" component={DetailsScreen} options={{ header: props => <CustomedHeader name="Details" navigation={props.navigation} /> }} />
      <Stack.Screen name="About Us" component={AboutScreen} options={{ header: props => <CustomedHeader name="About" navigation={props.navigation} /> }} />
      <Stack.Screen name="ChrisBio" component={ChrisBio} options={{ header: props => <CustomedHeader name="Chris" navigation={props.navigation} /> }}/>
      <Stack.Screen name="wucBio" component={wucBio} options={{ header: props => <CustomedHeader name="Wuc" navigation={props.navigation} /> }}/> 
      <Stack.Screen name="QingtianMei" component={QingtianMei} options={{ header: props => <CustomedHeader name="Mei" navigation={props.navigation} /> }}/> 
      <Stack.Screen name="HarrisRipp" component={HarrisRipp} options={{ header: props => <CustomedHeader name="Harris" navigation={props.navigation} /> }}/> 
      <Stack.Screen name="Challenges" component={Challenges} options={{ header: props => <CustomedHeader name="Challenges" navigation={props.navigation} /> }}/> 
      <Stack.Screen name="MyProfile" component={MyProfile} options={{ header: props => <CustomedHeader name="MyProfile" navigation={props.navigation} /> }}/> 
      <Stack.Screen name="SignUp" component={SignUp} options={{ header: props => <CustomedHeader name="SignUp" navigation={props.navigation} /> }}/> 

    </Stack.Navigator>
  )
}



function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
        <Button
          title={"Go to bio for Chris "}
          onPress={() => {navigation.navigate("ChrisBio");}}
        />
        <Button
          title={"Go to bio for Chongkai "}
          onPress={() => {navigation.navigate("wucBio");}}
        />
         <Button
          title={"Go to bio for Qingtian Mei "}
          onPress={() => {navigation.navigate("QingtianMei");}}
        />
        <Button
          title={"Go to bio for Harris Ripp "}
          onPress={() => {navigation.navigate("HarrisRipp");}}
        />
      </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name } = route.params;
  const { age } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'centser', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(name)}</Text>
      <Text>otherParam: {JSON.stringify(age)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props => <DrawerContainer navigation = {props.navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
}


console.disableYellowBox = true;