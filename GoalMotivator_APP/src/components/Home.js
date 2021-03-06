import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  View,
  Text,
   Image,
   ImageBackground
} from 'react-native';










const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'My Page',
    uri: 'Home',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Challenges',
    uri: 'Challenges'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Prove',
    uri: 'Prove'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Settings',
    uri: 'Settings'
  },
];

function Item({ id, title, uri, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(uri)}
      style={[
        styles.item,
        { backgroundColor: '#90ee90' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function Home({route, navigation}) {

  const onSelect = (uri) =>{
    navigation.navigate(uri);
  }

  return (

<ImageBackground
                source={require('../media/GoalSettingPlaceHolder.jpg')}
                style={styles.container}>
    <SafeAreaView style={styles.container}>

      <View >
        <DisplayAnImage/>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.GridViewBlockStyle}>
          <Item
            id={item.id}
            title={item.title}
            uri = {item.uri}
            onSelect = {onSelect}
          />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>
                </ImageBackground>

  );
}

const DisplayAnImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.logo}
        source={require('../media/GoalSettingPlaceHolder.jpg')}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  ImageContainer: {
    flex: 1,
  },

  logo: {
    flex: 1
  },

  list: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'stretch',
  },
  GridViewBlockStyle: {

  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  alignContent: 'stretch',
  height: 100,
  margin: 5,
  backgroundColor: 'transparent'

},
   container: {
  justifyContent: 'center',
flex:1,
margin: 10,

  },
  item: {
    flex: 1,
    backgroundColor: '#90ee90',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    margin: 1
  },
  title: {
    fontSize: 32,
  },
});
