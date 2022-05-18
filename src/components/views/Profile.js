import React from 'react';

import {View, Text, Image, StyleSheet, Modal, TouchableHighlight } from 'react-native';


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  render() {
  return (
    <View>
      <View style={{alignItems: "center"}}>
        <Image style={styles.icon}
            source={require('../../assets/images/profile-icon.png')}
        />
        <Text style={{
          fontSize: 14,
          fontWeight: "600",
          marginBottom: 10
        }}>ac1384726@gmail.com</Text>
        <Text style={{
          fontSize: 24,
          fontWeight: "700",
          color: "black"
        }}>Emma</Text>
      </View>
      <Text style={{
        fontSize: 19,
        fontWeight: "600",
        color: "black",
        marginLeft: 25,
        marginTop: 40
      }}>Choose option</Text>
      <View style={[styles.itemContainer]}>
        <Image source={require("../../assets/images/log-out.png")}></Image>
        <Text style={styles.text}>Log out</Text>
    </View>
    <View style={[styles.itemContainer]}>
        <Image source={require("../../assets/images/delete.png")}></Image>
        <Text style={styles.text} onPress={()=>{this.setState({show:true})}}>Delete profile</Text>
    </View>
    <Modal transparent={true} visible={this.state.show}>
      <View style={{backgroundColor: "white", width: 300, height: 300, margin: 50, alignItems: "center", borderColor: "#2F3092", borderWidth: 1}}>
          <Text style={{fontSize: 19, fontWeight: "600", marginTop: 75, color: "black"}}>Are you sure?</Text>
          <Text style={{fontSize: 15, fontWeight: "400", marginTop: 20, color: "black"}}>All your datas will be deleted!</Text>
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <TouchableHighlight>
              <Image source={require("../../assets/images/yes-btn.png")} style={{marginRight: 75}}></Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>{this.setState({show:false})}}>
              <Image source={require("../../assets/images/no-btn.png")}></Image>
            </TouchableHighlight>
          </View>
      </View>
    </Modal>
    </View>
  );
};
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50, 
    width: 120, 
    height: 120,
    marginTop: 50,
    marginBottom: 15,
  },
  itemContainer: {
    marginHorizontal: 7,
    marginTop: 32,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 19,
    fontWeight: "600",
    marginLeft: 15
  }
});

export default Profile;