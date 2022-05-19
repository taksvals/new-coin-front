import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAlert } from '../../actions/alert';

import {View, SafeAreaView, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';

import InputField from '../reusable/InputField';
import ButtonComponent from '../reusable/ButtonComponent';
import LinkComponent from '../reusable/LinkComponent';

import { register } from '../../actions/auth';

const SignUp = ({ setAlert, register, isAuthenticated, navigation }) => {

    const [email, setEmail] = useState(); 
    const [username, setUsername] = useState(); 
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const onSubmit = async () => {
        console.log(username, email, password);
        if (password === confirmPassword) {
            register(username, email, password);
        }
    };

    if(isAuthenticated) {
        navigation.navigate('MainStack');
    }

  return (
      <KeyboardAvoidingView style={styles.container}>
            <View>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                    />
                </View>
                <InputField 
                    title="Email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={setEmail}
                    />
                <InputField 
                    title="Nickname" 
                    placeholder="Enter nickname"
                    value={username}
                    onChange={setUsername}
                    />
                <InputField 
                    title="Password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={setPassword}
                    hide/>
                <InputField 
                    title="Confirm Password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    hide/>
            </View>
            <ButtonComponent value="Ready" onClick={onSubmit}/>
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

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(SignUp);