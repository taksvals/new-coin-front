import React from 'react';

import {View, FlatList} from 'react-native';

import InputField from '../reusable/InputField';
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

const Main = () => {
  const renderItem = ({ item }) => (
    <ListItem name={item.name} price={item.price} favorite={item.favorite}/>
  );
  return (
    <View>
      <InputField placeholder="Search"/>
      <FlatList 
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.name}/>
      {/* <ListItem name="BTC/BUSD" price="$54,382.64"/> */}
    </View>
  );
};

export default Main;