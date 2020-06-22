import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../components/MenuButton/MenuButton';

export default function DrawerContainer({navigation}) {
    return (
      <View style={styles.content}>
        <View style={styles.container}>
            <MenuButton
            title="About"
            source={require('../assets/icons/information.png')}
            onPress={() => {
              navigation.navigate('About Us');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CHALLENGES"
            source={require('../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Challenges');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SignUp"
            source={require('../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('SignUp');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Profile"
            source={require('../assets/icons/profile.png')}
            onPress={() => {
              navigation.navigate('MyProfile');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="GoalProofs"
            source={require('../assets/icons/upload.png')}
            onPress={() => {
                navigation.navigate('Proofs');
                navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );

}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
