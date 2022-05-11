import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../components/views/SignIn';
//import SignUp from '../screens/SignUp';

export default AuthStack = () => {
  const AuthStackNav = createStackNavigator();

  return (
    <AuthStackNav.Navigator 
    screenOptions = {() => ({headerShown: false})}>
      <AuthStackNav.Screen name="SignIn" component={SignIn} />
      {/* <AuthStackNav.Screen name="SignUp" component={SignUp} /> */}
    </AuthStackNav.Navigator>
  );
};