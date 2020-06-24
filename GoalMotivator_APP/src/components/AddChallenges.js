import React ,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, Modal, TextInput, TouchableHighlight, Image, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { useForm, Controller } from "react-hook-form";
import { AsyncStorage } from 'react-native';
import {DatePicker} from "react-native-common-date-picker";
import {CalendarList} from "react-native-common-date-picker";

export default function AddChallenge({ route, navigation }) {
   
    const { parentCall } = route.params;

    const [open, setOpen] = React.useState(false);
    const [openToOthers, setOpenToOthers] = React.useState('');
    const [challenge, setChallenge] = React.useState('')
    const [timeperiod, setTimePeriod] = React.useState('')
    const [frequency, setFrequency] = React.useState('')
    const [enrollment, setEnrollment] = React.useState('')

    const { control, handleSubmit, errors } = useForm();

    const { ifVisible, setIfVisible} = React.useState(false);


  

    const createNewItem = () =>{
        const item = {id: 0, challenge: challenge, timeperiod: timeperiod, frequency: frequency, enrollment: enrollment, groupcreator: "someone", img: {src: "src/media/leetcode1.png", alt : "leetcode"}}
        parentCall(item);        
    }

    return (
        <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(challenge) => setChallenge(challenge)}/>
        </View>
        {/* <View style={styles.inputContainer}>
        <CalendarList
            containerStyle={{flex: 1}}
            cancel={() => setIfVisible(false)}
            confirm={data => {
                this.setState({
                   selectedDate1: data[0],
                   selectedDate2: data[1],
                   visible: false,
                });
            }}
        />
        </View> */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Length"
              secureTextEntry={false}
              underlineColorAndroid='transparent'
              onChangeText={(timeperiod) => setTimePeriod({timeperiod})}/>
        </View>

         <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Frequency"
              secureTextEntry={false}
              underlineColorAndroid='transparent'
              onChangeText={(frequency) => setFrequency(frequency)}/>
        </View>
         <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Enrollment"
              secureTextEntry={false}
              underlineColorAndroid='transparent'
              onChangeText={(enrollment) => setEnrollment(enrollment)}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Public"
              secureTextEntry={false}
              underlineColorAndroid='transparent'
              onChangeText={(openToOthers) => setOpenToOthers(openToOthers)}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => {createNewItem();               
                                                                                                  navigation.navigate('Challenges');}}>
          <Text style={styles.signUpText}>Add a Challenge</Text>
        </TouchableHighlight>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
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
  }
})