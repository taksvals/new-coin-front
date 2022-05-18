import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../components/views/SignIn';
import SignUp from '../components/views/SignUp';
import Welcome from '../components/views/Welcome';

export default AuthStack = () => {
  const AuthStackNav = createStackNavigator();

  return (
    <AuthStackNav.Navigator 
    screenOptions = {() => ({headerShown: false})}>
      <AuthStackNav.Screen name="Welcome" component={Welcome} />
      <AuthStackNav.Screen name="SignIn" component={SignIn} />
      <AuthStackNav.Screen name="SignUp" component={SignUp} />
    </AuthStackNav.Navigator>
  );
};