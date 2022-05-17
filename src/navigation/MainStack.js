import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

import Favorites from '../components/views/Favorites';
import Main from '../components/views/Main';
import Profile from '../components/views/Profile';

export default MainStack = () => {
  const MainS = createBottomTabNavigator();
  const tabBarOptions = {
    showLabel: false,
    style: {
      borderTopWidth: 1,
      borderTopColor: '#17a2b8',
      backgroundColor: '#222222',
    },
  };

  const screenOptions = ({route}) => ({
    tabBarShowLabel: false,
    tabBarOptions: tabBarOptions,
    tabBarIcon: ({focused}) => {
      let iconName = require('../assets/images/main-tab.png');

      switch (route.name) {
        case 'Main':
          iconName = require('../assets/images/main-tab.png');
          break;
        case 'Favorites':
          iconName = require('../assets/images/favorites-tab.png');
          break;
        case 'Profile':
          iconName = require('../assets/images/profile-tab.png');
          break;
        default:
          iconName = require('../assets/images/main-tab.png');
      }
      return (
        <Image
          source={iconName}
        />
      );
    },
    headerShown: false
  });

  return (
    <MainS.Navigator
      screenOptions={screenOptions}
      >
      <MainS.Screen name="Favorites" component={Favorites} />
      <MainS.Screen name="Main" component={Main} />
      <MainS.Screen name="Profile" component={Profile} />
    </MainS.Navigator>
  );
};