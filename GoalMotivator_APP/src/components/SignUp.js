import * as React from 'react';
import { Text, View, StyleSheet,  TextInput, TouchableHighlight, Image, Alert } from 'react-native';
import maleIcon from '../assets/icons/maleIcon.png';
import message from '../assets/icons/message.png';
import SelectPicker from 'react-native-select-picker';
import key1 from '../assets/icons/key1.png';
import calender from '../assets/icons/calender.png';
import userName from '../assets/icons/userName.png';
import gender1 from '../assets/icons/gender1.png';

export default function SignUpPage({ navigation }) {

  const[name, setName] = React.useState("")
  const[age, setAge] = React.useState("")
  const[gender, setGender] = React.useState("")
  const[username, setUsername] = React.useState("")
  const[email, setEmail] = React.useState("")
  const[password, setPassword] = React.useState("")
  
  const onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  return (
    <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={maleIcon}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(name) => setName({name})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={calender}/>
          <TextInput style={styles.inputs}
              placeholder="Your age"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(age) => setAge(age)}/>
        </View>
          
        <View>
          <Image style={styles.inputIcon} source={gender1}/>
          <SelectPicker onValueChange={(gender) => {setGender(gender)}} selected={gender}>
            <Text style={styles.inputs}>Select your gender</Text>
            <SelectPicker.Item label="Male" value="male" />	
            <SelectPicker.Item label="Female" value="female" />	
            <SelectPicker.Item label="Other" value="other" />	
            <SelectPicker.Item label="Unidentified" value="unidentified" />	
          </SelectPicker>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={userName}/>
          <TextInput style={styles.inputs}
              placeholder="User name (less than 20 characthers)"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(username) => setUsername(username)}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={message}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => setEmail({email})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={key1}/>
          <TextInput style={styles.inputs}
              placeholder="Password (6-20 characthers)"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => setPassword({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => sign_up_now()}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

    </View>
  );
}

function sign_up_now(){
  console.log("signing up")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:350,
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
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});