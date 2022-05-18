import React from 'react';

import {View, Text, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';

// import CheckBox from '@react-native-community/checkbox';

import InputField from '../reusable/InputField';

import ButtonComponent from '../reusable/ButtonComponent';

import LinkComponent from '../reusable/LinkComponent';

const SignUp = ({ navigation }) => {
  return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <InputField title="Email" placeholder="Enter email"/>
            <InputField title="Nickname" placeholder="Enter nickname"/>
            <InputField title="Password" placeholder="Enter password"/>
            <InputField title="Confirm Password" placeholder="Confirm password"/>
        </View>
        <ButtonComponent value="Ready" link="Favorites"/>
        <LinkComponent textValue="Already Have an Account? " link="SignIn" value="Sign in here"/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
});


export default SignUp;