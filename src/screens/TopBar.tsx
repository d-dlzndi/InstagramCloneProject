import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data/';

const title = 'CopyMe';
const name = D.randomName();
const avatarUrl = D.randomAvatarUrl(name);

const TopBar = () => {
  return (
    <View style={[styles.view]}>
      <Image style={styles.avatar} source={{uri: avatarUrl}} />
      <Text style={[styles.text]}>{title}</Text>
      <Icon name="menu" size={24} color="white" />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: Colors.blue300,
  },
  text: {fontSize: 20, color: 'white'},
  avatar: {width: 40, height: 40, borderRadius: 20},
});
