import React from 'react';
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

function Item({ id, title, src, info, selected, onSelect }) {
  const imageSource = '../assets/' + src;    
  return (
    <TouchableHighlight
      underlayColor = 'rgba(73, 182, 77,1,0.9)'
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

export default function Challenges() {
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={challengeData}
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
});
