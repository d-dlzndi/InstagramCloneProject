import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const iconSize = 30,
  iconColor = 'white';
const icons = ['home', 'table', 'user-circle', 'wrench'];

const BottomBar = () => {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));
  return <View style={[styles.view]}>{children}</View>;
};

export default BottomBar;

const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: Colors.blue900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {fontSize: 20, color: 'white'},
});
