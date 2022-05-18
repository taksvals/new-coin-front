import React from 'react';

import {View, Image, KeyboardAvoidingView, StyleSheet, Text} from 'react-native';

import ButtonComponent from '../reusable/ButtonComponent';


const SignIn = ({ navigation }) => {
  return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={{
                marginHorizontal: 55, 
                marginTop: 30, 
                marginBottom: 25
            }}>
            <Text style={styles.text}>Store and manage all your digital currencies with ease in the smart wallet interface</Text>
            </View>
        </View>
        <ButtonComponent value="Login" link="SignIn"/>
        <ButtonComponent value="SignUp" link="SignUp"/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150
    },
    text: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: '600',
        color: '#2F3092'
    }
});


export default SignIn;