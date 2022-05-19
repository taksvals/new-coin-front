import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

export default AppStack = () => {
  const AppStackNav = createStackNavigator();

  return (
    <AppStackNav.Navigator screenOptions = {() => ({headerShown: false})}>
        <AppStackNav.Screen name="AuthStack" component={AuthStack} />
        <AppStackNav.Screen name="MainStack" component={MainStack} />
    </AppStackNav.Navigator>
  );
};