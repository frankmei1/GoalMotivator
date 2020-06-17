import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements'
import QingtianMei from '../../assets/profiles/QingtianMei.jpeg';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={ QingtianMei}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Qingtian Mei</Text>
              <View style={styles.socialRow}>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="facebook-with-circle"
              onPress={() => console.log('facebook')}
            />
          </View>
          <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#56ACEE"
              name="twitter-with-circle"
              onPress={() => console.log('twitter')}
            />
          </View>
          <View>
            <Icon
              size={30}
              type="entypo"
              color="#DD4C39"
              name="google--with-circle"
              onPress={() => console.log('google')}
            />
         </View>
              <View style={styles.socialIcon}>
            <Icon
              size={30}
              type="entypo"
              color="#3B5A98"
              name="linkedin-with-circle"
              onPress={() => console.log('linkedin')}
            />
         </View>
         </View>

              <Text style={styles.info}>Student / FrontEnd developer,  
                    <Text style={styles.school}> Brandeis University, </Text> 
              </Text>
             <Text style={styles.info}>                    
                   <Text style={styles.major}>B.S Computer Science and Biology, </Text>
                    Student / FrontEnd developer
             </Text>

              <Text style={styles.description}>Qingtian Mei is currently a student at Brandeis University double majored in Computer Science, and Biology. He is currently a rising senior student. 
              He has been interned in mutiple roles for FrontEnd Software Development during the summer time. He likes to fish and garden during his free time. Also, during the quarantine time, he enhanced his
              cooking skills.</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  major:{
    fontSize:16,
    color: "#5f9ea0",
    marginTop:10
  },
  school: {
      fontSize: 16,
      color: '#6495ed',
      marginTop: 10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14,

  },
  socialRow: {
    flexDirection: 'row',
    marginTop:10
  },
});
 