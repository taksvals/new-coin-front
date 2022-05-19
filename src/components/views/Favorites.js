import React from 'react';

import {View, FlatList, Image, Text, StyleSheet} from 'react-native';

import ListItem from '../reusable/ListItem';


const DATA = [
  {
    name: 'BTC/BUSD',
    price: '$54,382.64',
    favorite: true
  },
  {
    name: 'LTC/BUSD',
    price: '$54,382.64',
    favorite: true
  },
];

const Favorites = () => {
  const renderItem = ({ item }) => (
    <ListItem name={item.name} price={item.price} favorite={item.favorite}/>
  );
  return (
    <View>
      <View style={styles.head}> 
        <Image style={{borderRadius: 50}}
            source={require('../../assets/images/profile-icon.png')}
        />
        <View style={styles.helloUser}>
          <Text>Hello,</Text>
          <Text style={{fontSize: 24, color: "black"}}>Emma</Text>
        </View>
        <Image style={{marginLeft: 100}}
            source={require('../../assets/images/bell.png')}
        />
      </View>
      <Text style={styles.text}>Your watch list</Text>
      <FlatList 
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.name}/>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 60,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 25,
    marginHorizontal: 40
  },
  text: {
    marginLeft: 25,
    marginBottom: 20,
    fontSize: 19,
    color: "black",
    fontWeight: "600"
  },
  helloUser: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "700",
    }
});

export default Favorites;