import React from 'react';

import {View, Text, Image, KeyboardAvoidingView, StyleSheet} from 'react-native';

import InputField from '../reusable/InputField';

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
        <Text onPress={() => navigation.navigate('SignIn')}>
            Sign In
        </Text>
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
    }
});


export default SignUp;