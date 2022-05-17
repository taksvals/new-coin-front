import React from 'react';

import {View, FlatList, Text} from 'react-native';

import ListItem from '../reusable/ListItem';

const DATA = [
  {
    name: 'BTC/BUSD',
    price: '$54,382.64',
    favorite: true
  },
  {
    name: 'ETH/BUSD',
    price: '$54,382.64',
    favorite: false
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
      <FlatList 
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.name}/>
      {/* <ListItem name="BTC/BUSD" price="$54,382.64"/> */}
    </View>
  );
};

export default Favorites;