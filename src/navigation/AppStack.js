import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default AppStack = () => {
  const AppStackNav = createStackNavigator();
  const user = {
    isLoggedIn: false,
  };

  return (
    <AppStackNav.Navigator screenOptions = {() => ({headerShown: false})}>
      {user.isLoggedIn ? (
        <AppStackNav.Screen name="Main" component={MainStack} />
      ) : (
        <AppStackNav.Screen name="Auth" component={AuthStack} />
      )}
    </AppStackNav.Navigator>
  );
};