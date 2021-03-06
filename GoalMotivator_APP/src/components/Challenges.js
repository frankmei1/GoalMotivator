import React ,{useState,useEffect} from 'react';
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
import challengeData from '../assets/challenges/challengeData.js';
import crossfit from '../assets/challenges/media/crossfit.png';
import MenuButton from './MenuButton/MenuButton';



function Item({item, title, info, navigation}) {
  return (
    <TouchableHighlight
      underlayColor = '#f0f'
    >
    <View style = {styles.container}>
    <Image style={[styles.photo]} source={crossfit}/> 
    <Text style={styles.name}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <MenuButton
            style={styles.button}
            title="Learn More"
            source={require('../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('LearnMore',  {item: item});
          }}
          />
    </View>
    </TouchableHighlight>
  );
}

var uuid = require('react-native-uuid');
const realDeviceId = uuid.v4(); // this generates a unique ID for this device.
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://qingtian_mei:<testPassword>@cluster0.xsgi5.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

export default function Challenges({navigation}) {
  
  const localserverURL='http://localhost:3000'  // for local server
  const remoteserverURL = 'http://gracehopper.cs-i.brandeis.edu:3500'

  const [items, setItems] = useState(challengeData);
  const [loading, setLoading] = useState(true);

  // const [value, setValue] = useState(0);
  const [deviceId,setDeviceId] = useState("Qingtian Mei")
  const [email, setEmail] = useState("Qingtian Mei");
  const [loggingIn,setLoggingIn] = useState(true)

  const testConnect = () =>{
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
    
  }
  
  const onSubmit = (item) =>{
        item.id = items.length
        writeItemToCloud(items.concat(item))
  }
  
  const writeItemToCloud = async newValue => {
    try{
            console.log('newValue' + JSON.stringify(newValue))
          await fetch(`${remoteserverURL}/store`,{
            method:"POST",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              key: 'GOAlMotivator',
              deviceId: deviceId,
              value: newValue
            })
          });
          
          setItems(newValue);
    } catch(e){
      console.log('error in cloud' + e)
    }
    //await setItem(JSON.stringify(newValue));
  
  };

  const readItemFromCloud = async () => {
    //const item = await getItem();
    console.log("about to read item from Cloud: deviceId="+deviceId)
    const item = await fetch(`${remoteserverURL}/get`,{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'GOAlMotivator',
        deviceId: deviceId,
      })
    })
    let itemParsed = await item.json()
    console.log(`item = ${itemParsed}`)
    if(itemParsed=="null"){
      itemParsed = null
    }
    const v = itemParsed || items
    setItems(v)
    console.log(`just set value to ${v}, now value=${JSON.stringify(items, null, 2)}`)
    //setValue(JSON.parse(item));
  };

  useEffect(() =>{
    testConnect();
    readItemFromCloud()
    setLoading(false)
  },[])

  if (loading){
    return <Text> loading</Text>
  } else{
   return (
    <SafeAreaView style={styles.container}>
      <MenuButton
            style = {styles.Addcontainer}
            title="Add Challenge"
            source={require('../assets/icons/add.png')}
            onPress={() => {
                navigation.navigate('AddChallenge',  {parentCall: onSubmit});
            }}
      />      

      <ScrollView style={styles.scrollView}>
          <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item
              item={item}
              title={item.challenge}
              info = {item.enrollment}
              navigation = {navigation}
            />
        )}
          keyExtractor={item => item.id}
      />
      </ScrollView>
    </SafeAreaView>
  );
}
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
    name: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
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
    scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    margin: 10,

  },
  Addcontainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20
  }
});
