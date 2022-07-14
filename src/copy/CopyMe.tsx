import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native-paper';

const title = 'CopyMe';
const CopyMe = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
};

export default CopyMe;

const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
});
