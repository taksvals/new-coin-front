import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const LinkComponent = ({textValue, link, value}) => {
  const navigation = useNavigation();
  return (
    <Text style={styles.text}>
        <Text style={{ textTransform: 'uppercase'}}>
            <Text >{textValue}</Text>
        </Text>
        <Text style={Object.assign({ textDecorationLine: 'underline'})} onPress={() => navigation.navigate(`${link}`)}>
                {value}
        </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
    text: {
      marginTop: 27,
        textAlign: "center",
        fontSize: 12,
        color: "#2F3092",
      },
});

export default LinkComponent;