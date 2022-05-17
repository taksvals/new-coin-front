import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const ListItem = ({name, price, favorite}) => {
  return (
    <View style={[styles.itemContainer, favorite ? styles.favoriteItemContainer : styles.itemContainer]}>
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.priceStyle}>{price}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Text>BUTTON</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
      marginHorizontal: 20,
      marginVertical: 4,
      padding: 16,
      borderColor: "#BAC8BA",
      borderWidth: 1,
      borderRadius: 10
  },
  favoriteItemContainer: {
    backgroundColor: "#EAEAFF",
    borderColor: "#5D5FFF" 
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6
  },
  buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end"
  },
  textStyle: {
      fontSize: 20,
      color: "#152C07",
      fontWeight: "700"
  },
  priceStyle: {
    fontSize: 16,
    color: "#152C07",
    fontWeight: "700"
}
});

export default ListItem;