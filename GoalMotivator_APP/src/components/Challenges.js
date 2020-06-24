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
import Constants from 'expo-constants';
import challengeData from '../assets/challenges/challengeData.js';
import crossfit from '../assets/challenges/media/crossfit.png';
import MenuButton from './MenuButton/MenuButton';
import AddChallenges from './AddChallenges.js';



function Item({ id, title, src, info, selected, onSelect }) {
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

var uuid = require('react-native-uuid');
const realDeviceId = uuid.v4(); // this generates a unique ID for this device.

export default function Challenges({navigation}) {

  const localserverURL='http://localhost:3000'  // for local server
  const remoteserverURL = 'http://gracehopper.cs-i.brandeis.edu:3500'

  const [selected, setSelected] = React.useState(new Map());
  const [items, setItems] = useState(challengeData);


  const [value, setValue] = useState(0);
  const [deviceId,setDeviceId] = useState("1234")
  const [email, setEmail] = useState("anonymous@brandeis.edu");
  const [loggingIn,setLoggingIn] = useState(true)

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  const onSubmit = (item) =>{
        item.id = items.length
        setItems(items.concat(item))
  }

  const writeItemToCloud = async newValue => {
    //await setItem(JSON.stringify(newValue));

    await fetch(`${remoteserverURL}/store`,{
      method:"POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: 'counterDemo',
        deviceId: deviceId,
        value: newValue
      })
    });

    setValue(newValue);
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
        key: 'counterDemo',
        deviceId: deviceId,
      })
    })
    const itemParsed = await item.json()
    console.log(`item = ${itemParsed}`)
    const v = parseInt(itemParsed) || 0
    setValue(v)
    console.log(`just set value to ${v}, now value=${value}`)
    //setValue(JSON.parse(item));
  };

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
              id={item.id}
              title={item.challenge}
              src = {item.img.src}
              info = {item.enrollment}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
        )}
          keyExtractor={item => item.id}
          extraData={selected}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
    elevation: 3
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
