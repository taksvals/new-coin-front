import React from 'react';


import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonComponent = ({value}) => {
  return (
    <TouchableOpacity >
      <View style={styles.button}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#2F3092',
    width: 60,
    height: 25
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
  },
});

export default ButtonComponent;