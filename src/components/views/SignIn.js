import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {View, Image, KeyboardAvoidingView, StyleSheet} from 'react-native';

import InputField from '../reusable/InputField';
import ButtonComponent from '../reusable/ButtonComponent';
import LinkComponent from '../reusable/LinkComponent';

import { login } from '../../actions/auth';

const SignIn = ({login, isAuthenticated, navigation}) => {

    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState(); 

    const onSubmit = async () => {
        login(email, password);
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
                onChange={setEmail}/>
            <InputField 
                title="Password"
                placeholder="Enter password"
                value={password}
                onChange={setPassword}
                hide/>
        </View>
        <ButtonComponent value="Enter" link="Favorites" onClick={onSubmit}/>
        <LinkComponent textValue="Don't have an account yet? " link="SignUp" value="Register here"/>
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
        marginTop: 100
    },
});

SignIn.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(SignIn);