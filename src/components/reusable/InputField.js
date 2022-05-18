import React from 'react';

import {View, TextInput, Text, StyleSheet} from 'react-native';

const InputField = ({placeholder, title, hide, onChange, value, keyboardType}) => {
  const [borderColor, setBorderColor] = React.useState("#BAC8BA");
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput 
        value={value}
        placeholder={placeholder}
        style={[styles.input, {borderColor: borderColor}]}
        onChangeText={onChange}
        keyboardType={keyboardType}
        onFocus={() => setBorderColor("#2F3092")}
        onBlur={() => setBorderColor("#BAC8BA")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginBottom: 11,
  },
  inputTitle: {
    fontSize: 18,
    color: "#2F3092",
    marginBottom: 8
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    paddingLeft: 20
  }
});

export default InputField;