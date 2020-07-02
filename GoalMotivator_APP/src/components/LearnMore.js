import React from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import crossfit from '../assets/challenges/media/crossfit.png';
import MenuButton from './MenuButton/MenuButton';


export default function LearnMore({route, navigation}) {

  const {item} = route.params;
  console.log(item);
  
  // const imageSource = '../assets/' + src;    
  return (
    <TouchableHighlight
      underlayColor = '#f0f'
    >
      <View style = {styles.container}>
          <Image style={[styles.photo]} source={crossfit}/> 
          <Text style = {styles.name}>{item.challenges}</Text>
          <Text style = {styles.name}>{item.description}</Text>
          <Text style = {styles.name}>{item.enrollment}</Text>
          <Text style = {styles.name}>{item.frequency}</Text>
          <Text style = {styles.name}>{item.groupcreator}</Text>
          <Text style = {styles.name}>{item.groupmembers}</Text>
          <Text style = {styles.name}>{item.timeperiod}</Text>
          <MenuButton
                  style={styles.button}
                  title="JOIN NOW"
                  source={require('../assets/icons/category.png')}
                />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 200,
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: 'white',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,

  },
  signupButton: {
    backgroundColor: "gray",
  },
  signUpText: {
    color: 'white',
  },
    photo: {
    width: '100%',
    height: 155,
    borderRadius:20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  info: {
    marginTop: 3,
    marginBottom: 5
  },
   name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
})
