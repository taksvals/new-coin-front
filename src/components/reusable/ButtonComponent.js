import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonComponent = ({value, link}) => {
  const [backgroundColor, setBackgroundColor] = React.useState("#F40086");
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {setBackgroundColor("#FFA8D8"), navigation.navigate(`${link}`)}}>
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
    marginHorizontal: 92,
    marginTop: 35,
    paddingVertical: 11,
    paddingHorizontal: 32,
    borderRadius: 6,
    backgroundColor: '#F40086',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: 'white',
    textTransform: 'uppercase'
  },
});

export default ButtonComponent;